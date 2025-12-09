"""
Simple helper to extract selected PDF docs to markdown for AI-friendly use.
"""

from pathlib import Path
import sys

try:
    import pypdf  # type: ignore
except ImportError:
    sys.stderr.write("ERROR: pypdf not installed. Install with: pip install pypdf\n")
    sys.exit(1)


def extract(pdf_path: Path, out_dir: Path) -> None:
    if not pdf_path.exists():
        sys.stderr.write(f"SKIP (missing): {pdf_path}\n")
        return

    try:
        reader = pypdf.PdfReader(str(pdf_path))
    except Exception as exc:  # pragma: no cover - runtime environment
        sys.stderr.write(f"ERROR reading {pdf_path}: {exc}\n")
        return

    texts: list[str] = []
    for idx, page in enumerate(reader.pages):
        try:
            txt = page.extract_text() or ""
        except Exception as exc:  # pragma: no cover - runtime environment
            sys.stderr.write(f"WARN page {idx + 1} {pdf_path.name}: {exc}\n")
            txt = ""
        texts.append(txt)

    md = f"# {pdf_path.name}\n\n" + "\n\n".join(texts)
    out_file = out_dir / f"{pdf_path.stem}.md"
    out_file.write_text(md, encoding="utf-8")
    print(f"Wrote {out_file} ({len(texts)} pages)")


def main() -> None:
    root = Path("docs/zonesoft-api")
    out_dir = root / "converted"
    out_dir.mkdir(parents=True, exist_ok=True)

    inputs = [
        root / "IntegrationManual.pdf",
        root / "IntegrationManagementPlatformManual.pdf",
        root / "StructureOfEntities.pdf",
        root / "ZSROI" / "GenericIntegration.pdf",
    ]

    for pdf_path in inputs:
        extract(pdf_path, out_dir)


if __name__ == "__main__":
    main()



