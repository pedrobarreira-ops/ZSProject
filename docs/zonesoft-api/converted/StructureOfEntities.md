# StructureOfEntities.pdf

 
 
 
ZSAPI
 
Structure  of  Entities
 
API  Version:   3 
Database  Version:   >=2024  
Document´s  Review:   1.0 
On:   July,  2024 
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 1  /  53  
  


 
 Entities  ZSAPI Addresses  -  v2.0 ATResponse  -  v1.3 Breaks  -  v2.8 Characteristic  -  v2.0 CharacteristicValue  -  v1.0 Card  -  v2.0 Cardseries  -  v2.0 Cashflowmotive  -  v2.5 Cashoutflows-  v2.5 Category  -  v2.0 Client  -  v2.0 Discount  modes CounterBalance  -  v1.3 Couvert  -  v2.0 Couvertzone  -  v2.0 Document  -  v2.5 For  documents  of  the  type  ‘VD’  and  'FT'  the  following  fields  are  mandatory: For  documents  of  the  type  'EC'  the  following  fields  are  mandatory: For  documents  of  the  type  'TA'  the  following  fields  are  mandatory: Delivery  -  v2.1 Exemptionreason  -  v2.0 Family  -  v1.2 Group  -  v2.0 Happyhour  -  v2.0 Movements-  v2.3 Operator  -  v2.0 Option  -  v2.0 PaymentDoc  -  v1.2 PaymentOptions  -  v2.0 PaymentType  -  v2.11 Product  -  v2.8 ProductBarcode  -  v2.0 ProductCharacteristic  -  v2.0 ProductCharacteristicsValue  -  v2.0 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 2  /  53  
  


 
ProductProperty  -  v2.4 Productioncentre  -  v2.0 ProductStock  -  v2.1  -  Read  only  entity Productstockmovement  -  v2.1  -  Read  only  entity Property  -  v2.4 ReasonBreak  -  v2.0 Sale  -  v2.0 SalesDay  -  v2.0 SalesDayDetails  -  v3.0 SalesSession  -  v2.0 Salestation  -  v1.8 SaleStationSetting  -  v1.8 Salezone  -  v2.8 Signeddocumentscount  -  v2.1  -  Read  only  entity Store  -  v1.3 StoreSettings  -  v2.0 Subcategory  -   v2.0 SubFamily  -  v2.0 Supplier  -  v2.0 Tablemovement  -  v2.0   -  Read  only  entity Tax  -  v1.2 Technicalcard  -  v2.0 Technicalcardingredient  -  2.0 Technicalcardpreparation  -  v2.0 Teller  -  v2.0 Timeregister  -  v2.1  -  Read  only  entity Type  -  v2.0 Unit  -  v2.0 Version  -  v2.0  -  Read  only  entity Warehouse  -  v2.0 InfoDoc  -  v2.5   
 
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 3  /  53  
  


 
Entities  ZSAPI   
Addresses  -  v2.0  
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
 
integer
 ID  
cliente  NO  |  0  integer  Client  ID  
tipo  NO|  0  integer  Type  of  address  0  -  Other  *  1  -  Invoice  2  -  Delivery  
morada  YES  |  null  string(255)  Address  
codpostal4  YES  |  null  string(4)  Postal  Code  4  digits  “0000”  
codpostal3  YES  |  null  string(3)  Postal  Code  3  digits   “000”  
localidade  YES  |  null  string(255)  City  
telefone  YES  |  null  string(10)  Telephone  
fax  YES  |  null  string(10)  Fax  
telemovel  YES  |  null  string(10)  Mobile  
nome_contacto  YES  |  null  string(255)  Name  of  person  to  contact  
 
ATResponse  -  v1.3   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
ATResponseCode
 
No
 
|
 
0
 
integer
 Response  Code  returned  by  the  Portuguese  tax  authority  or  one  the  ZSAPI’s  internal  
error
 
codes.
 
See
 
table
 
below.
 
ATDocCodeID
 
NO
 
|
 
0
 
string
 Document  code  by  the  Portuguese  tax  
authority
 
-
 
if
 
communication
 
was
 
successful.
   
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 4  /  53  
  


 
List  of  internal  codes  generated  by  ZSAPI    
Código
 
Description
 
-1001
 The  Document  was  successfully  communicated  to  the  Portuguese  tax  authority,  but  an  error  occurred  while  writing  to  the  database.  The  document  should  be  
re-submitted
 
to
 
ZSAPI
 
using
 
the
 
method
 
Documents::saveInstances.
 Field  ATResponse . ATDocCodeID  is  filled  in  with  the  code  returned  by  Portuguese  
tax
 
authority.
 
-1002
 There  was  a  communication  error  with  the  Portuguese  tax  authority  service.  The  document  was  not  reported.  Document  not  saved  to  database  The  document  may  be  resubmitted.  
-1004
 The  AT  communication  settings  are  not  set  for  the  store  in  use.  The  document  was  not  reported.  
The
 
document
 
was
 
not
 
saved
 
to
 
the
 
database.
  
Breaks  -  v2.8   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
integer
 
Store
 
ID
 
idcx
 
YES
 
|
 
NULL
 
integer
 
Breaks
 
ID
 
data
 
NO
 
|
 
 
date
 Date  
datahora
 
NO
 
|
 
 
datetime
 The  datetime  instance  was  saved  
mesa  YES  |  NULL  integer  Table  number  
empid  YES  |  NULL  integer  Operator  ID  
codigo  YES  |  NULL  integer  ID  
qtd  YES  |  NULL  decimal(19,4)  Quantity  
valor  YES  |  NULL  decimal(19,4)  Value  
motivo  
YES
 
|
 
NULL
 
integer
 Reasons  for  status  
motivodesc  YES  |  NULL  string(50)  Description  of  the  Reasons  for  the  status  
armazem  
YES
 
|
 
NULL
 
integer
 Warehouse  ID  
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 5  /  53  
  


 
posto  NO  |  integer  POS  ID  
precocompra  YES  |  NULL  decimal(19,4)  Purchase  price  
precovenda  YES  |  NULL  decimal(19,4)  Price  
lastupdate
 
NO
 
|
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Characteristic  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
id
 
NO
 
|
 
integer
 
ID
 
valor
 
NO
 
|
 
string(100)
 
 
Description
 
ativo
 
NO
 
|
 
1
 
integer
 State  that  defines  whether  or  not  the  feature  
is
 
active
 
0
 
-
 
Inactive
 
1
 
-
 
Active
 
*
 
caracteristicas_valor
 
YES
 
|
 
 
array
 
Array
 
of
 
instances
 
of
 
characteristicValue
 
 
CharacteristicValue  -  v1.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
id_caracteristica
 
NO
 
|
 
integer
 
Characteristic
 
ID
 
id
 
NO
 
|
 
integer
 
ID
 
valor
 
NO
 
|
 
 
string(100)
 
Value
 
 
Card  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 6  /  53  
  


 
loja
 
NO
 
|
 
integer
 Store  ID  
numero  
NO
 
|
 
 
integer
 ID  
cliente  
YES
 
|
 
0
 
integer
 Client  ID  
saldo  
YES
 
|
 
 
decimal(19,4)
 Balance  
estado  
YES
 
|
 
0
 
integer
 Status  
motivo  
YES
 
|
 text  Reasons  for  status  
data  
YES
 
|
 date  Date  
prepago  
YES
 
|
 
0
 
integer
 Card  type:  0  -  Normal  *  1  -  Prepaid  
minimo  
YES
 
|
 
decimal(19,4)
 Minimum  value  
mingrupo  
YES
 
|
 
decimal(19,4)
 Minimum  value  for  a  group  
maximo  
YES
 
|
 
decimal(19,4)
 Maximum  value  
maxgrupo  
YES
 
|
 
decimal(19,4)
 Maximum  value  for  a  group  
zona  
YES
 
|
 
0
 
integer
 Zone  
serie  
YES
 
|
 
0
 
integer
 Serie  
perfil  
YES
 
|
 
0
 
integer
 Profile  
creditos  
YES
 
|
 
0
 
integer
 Credits  
gravacao  
YES
 
|
 
string(255)
 Recording  
maxcredito  
YES
 
|
 
decimal(19,4)
 Maximum  Credit  
lastupdate
 
NO
 
|
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Cardseries  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 7  /  53  
  


 
codigo
 
NO
 
|
 
integer
 
ID
 
descricao
 
NO
 
|
 
 
string(50)
 
Description
 
saldoexpira  NO  |  0  integer  Valid  if  the  balance  expires:  0  -  No  *  1  -  Yes  
minimo  YES  |  decimal(19,4)  Minimum  value  
maximo  YES  |  decimal(19,4)  Maximum  value  
tipo  YES  |  0  integer  Card  Type:  0  -  Normal  *  1  -  Prepaid  2  -  Table  3  -  Staff  4  -  VIP  
autoprod  YES  |  0  integer  Product  code  to  be  automatically  released  when  the  card  is  opened  
restricted  YES  |   0  integer  Reserved  0  -  No  *  1  -  Yes  
carregamento  YES  |  0  integer  Prepaid  card  0  -  No  *  1  -  Yes  
valorcarregamento  YES  |  decimal(19,4)  Charged  Amount  
tipopagamento  YES  |  1  integer  Payment  Type  
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Cashflowmotive  -  v2.5    
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
integer
 
ID
 
descricao
 
NO
 
|
 
string(100)
 
Description
 
tipo
 
NO
 
|
 
0
 
integer
 Types  of  motive  
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 8  /  53  
  


 
sync  
NO
 
|
 
0
 
integer
 
Client
 
type
 
cod_externo  
YES
 
|
 
NULL
 
string(20)
 
External
 
codigo
 
categoria  
YES
 
|
 
NULL
 
integer
 
Category
 
of
 
motive
 
 
 
Cashoutflows  -  v2.5    
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
integer
 
Store
 
ID
 
caixa
 
NO
 
|
 
 
integer
 
Teller
 
ID
 
data  
YES
 
|
 
NULL
 
datetime
 
Date
 
valor  
YES
 
|
 
NULL
 
decimal(19,4)
 
Value
 
descricao  
YES
 
|
 
NULL
 
string(250)
 
Description
 
empid  
YES
 
|
 
NULL
 
integer
 
Operator
 
ID
 
empnome  
YES
 
|
 
NULL
 
string(50)
 
Operator
 
name
 
datahora  NO  |   
datetime
 
The
 
datetime
 
instance
 
was
 
saved
 
idcx  YES  |  0  
integer
 
Cashoutflows
 
ID
 
numero  YES  |  0  
Integer
 
Cashoutflows
 
number
 
doc  YES  |  “  
string(10)
 
Document
 
type
 
serie  YES  |  “  
string(20)
 
Document
 
serie
 
produto  YES  |  0  
integer
 
Product
 
ID
 
codigo_motivo  YES  |  NULL  integer  Reason  for  the  move  
lastupdate  NO  |   
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 9  /  53  
  


 
 
Category  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
integer
 
ID
 
descricao
 
NO
 
|
 
string(50)
 
Description
 
loja
 
NO
 
|
 
integer
 Store  ID  
subcategories  
NO
 
|
 
 
array
 Instances  of  the  Subcategory  entity  that  
belong
 
to
 
the
 
Category
 
instance.
 
lastupdate
 
NO
 
|
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Client  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
 
integer
 
ID
 
nome
 
NO
 
|
 
string(50)
 
Name
 
datacriacao
 
NO
 
|
 
datetime
 
Date
 
time
 
the
 
instance
 
was
 
created
 
bloqueado
 
NO
 
|
 
0
 
integer
 Client   blocked  0  -  No  *  1  -  Yes  
morada
 
YES
 
|
 
NULL
 
 
string(250)
 
Address
 
codpostal
 
YES
 
|
 
NULL
 
string(20)
 
Postal
 
Code
  
“0000”
 
codpostal1
 
YES
 
|
 
NULL
 
string(20)
 
Postal
 
Code
 
“000”
 
localidade
 
YES
 
|
 
NULL
 
string(50)
 
City
 
telefone
 
YES
 
|
 
NULL
 
string(50)
 
Telephone
 
fax
 
YES
 
|
 
NULL
 
string(50)
 
Fax
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 10  /  53  
  


 
telemovel
 
YES
 
|
 
NULL
 
string(50)
 
Mobile
 
email
 
YES
 
|
 
NULL
 
string(50)
 
Email
 
web
 
YES
 
|
 
NULL
 
string(50)
 
website
 
obs
 
YES
 
|
 
NULL
 
string(250)
 
Comments
 
contribuinte
 
YES
 
|
 
NULL
 
string(15)
 
VAT
 
number
 
limitecredito
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Credit
 
limit
 
desconto
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Discount
 
Percentage
 
foto
 
YES
 
|
 
NULL
 string  
base64encoded
 
Picture
 
mododesconto
 
YES
 
|
 
0
 
integer
 
Discount
 
mode
 
(see
 
table
 
below)
 
datanascimento
 
YES
 
|
 
NULL
 
date
 
Birthdate
 
nomecontacto
 
YES
 
|
 
NULL
 
string(50)
 
Contact
 
name
 
rfid
 
YES
 
|
 
NULL
 
string(50)
 
RFID
 
matriculas  YES  |  “  string(1024)  Enrollment  
isento
 
YES
 
|
 
0
 
integer
 
Tax
 
exemption
 
code
 
motivo
 
YES
 
|
 
“”
 
string(10)
 
Tax
 
exemption
 
desciption
 
retencao
 
YES
 
|
 
0
 
integer
 Does  withholding  tax:  0  -  No  *  
1
 
-
 
Yes
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
sujeitopassivo
 
YES
 
|
 
0
 
integer
 Indicates  whether  the  client  is  a  taxable  
person
 0  -   No  *  
1
 
-
 
Yes
 
ivacaixa
 
YES
 
|
 
0
 
integer
 Indicates  whether  the  client  has  ivacaixa  
(Portuguese
 
Tax
 
Authority)
 0  -  No  *  
1
 
-
 
Yes
 
ivacaixainicio
 
YES
 
|
 
NULL
 
date
 
Date
 
ivacaixa
 
initiated
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 11  /  53  
  


 
ivacaixafim
 
YES
 
|
 
NULL
 
date
 
Date
 
ivacaixa
 
ended
 
percentagemretencao
 YES  |  
“0.0000”
 
decimal(19,4)
 
Percentage
 
withholding
 
tax
 
pais
 
YES
 
|
 
“PT”
 
string(4)
 Country  Code  
addresses  NO  |  array  Instances  of  the  Addresses  entity  that  belong  to  the  Customers  instance.  Example:  {“codigo”:1,”cliente”:1,”morada”:”Rua  X”,”codpostal4”:0000,”codpostal3”:000,”localidade”:”XYZ”,”telefone”:123456789,”fax”:123456789,”telemovel”:123456789,”nome_contacto”:”abcdef”,tipo:0}   No  tipo  os  valores  válidos  são:  0  -  Outra  *  1  -  Faturação    2  -  Transporte  
 
Discount  modes   
Código  Description  
0  Fixed  discount  on  sale  *  
1  First  registration  discount  
2  Sale  price1  on  First  registration  
3  Sale  price2on  First  registration  
4   Sale  price3  on  First  registration  
5  Sale  price4  on  First  registration  
6  Sale  price5  on  First  registration  
7  Sale  price1  on  all  registrations  
8  Sale  price2  on  all  registrations  
9  Sale  price3  on  all  registrations  
10  Sale  price4  on  all  registrations  
11  Sale  price5  on  all  registrations  
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 12  /  53  
  


 
 
CounterBalance  -  v1.3   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
integer
 
Store
 
ID
 
docNum
 
NO
 
|
 
integer
 Document  Number  that  identifies  this  
Counterbalance
 
docType
 
NO
 
|
 
 
string
 Document  Type  that  identifies  this  
Counterbalance
 
docSerie
 
NO
 
|
 
 
string(20)
 Document  Series  that  identifies  this  
Counterbalance
 
valor
 
NO
 
|
 
 
decimal(19,4)
 
Amount
 
data
 
NO
 
|
 
 
date
 
Date
 
 
Couvert  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
integer
 
ID
 
descricao
 
NO
 
|
 
string(50)
 
Description
 
pessoas
 
NO
 
|
 
0
 
integer
 
Number
 
of
 
people
 
per
 
quantity
 
qtd
 
NO
 
|
 
0
 
integer
 Quantity  of  couverts  to  launch  for  Number  of  
people
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
couvertzones
 
YES
 
|
 
NULL
 
array
 
Array
 
of
 
instances
 
CouvertZone
 
 
 
Couvertzone  -  v2.0    
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 13  /  53  
  


 
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
integer
 
Couvert
 
ID
 
zona
 
NO
 
integer
 
Zone
 
ID
 
 
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 14  /  53  
  


 
Document  -  v2.5   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
 
integer
 
Store
 
ID.
 
Número
 
NO
 
|
 
 
integer
 
Document
 
number
 
doc
 
NO
 
|
 
 
string(10)
 
Document
 
type
 
serie
 
NO
 
|
 
 
string(20)
 
Document
 
serie
 
hash
 
NO
 
|
 
NULL
 
string(255)
 
Document
 
hash
 
data
 
NO
 
|
 
date
 
Date
 
cliente
 
YES
 
|
 
NULL
 
integer
 
Client
 
ID
 
nome
 
YES
 
|
 
NULL
 
string(50)
 
Client
 
name
 
liquido
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Net
 
value
 
total
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Gross
 
value
 
anulado
 
YES
 
|
 
0
 
integer
 Status  0  -  Not  nullified  *  
1
 
-
 
Nullified
 
emp
 
YES
 
|
 
NULL
 
integer
 
Operator
 
ID
 
pago
 
YES
 
|
 
1
 
integer
 Payment  status  0  -  Not  payed  
1
 
-
  
Payed
 
*
 
datapag
 
YES
 
|
 
NULL
 
date
 
Payment
 
date
 
tipo
 
YES
 
|
 
0
 
integer
 Value  varies  for  each  document  type  
pagamento
 
YES
 
|
 
NULL
 
integer
 
Payment
 
type
 
ID
 
datahora
 
YES
 
|
 
NULL
 
datetime
 
document’s
 
Datetime
 
deve
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Value
 
in
 
debt
 
idcx
 
YES
 
|
 
NULL
 
integer
 
Salesession
 
ID
 
mesa
 
YES
 
|
 
0
 
integer
 
Registered
 
from
 
 
[0…
 
1000]
 
-
 
Tables
 
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 15  /  53  
  


 
[1001…
 
1100]
 
-
  
Balconies
 
[1101…
 
2000]
 
-
 
Spaces
 
 
>
 
2000
 
-
 
Cards
 
contribuinte
 
YES
 
|
 
NULL
 
string(20)
 
Client
 
VAT
 
number
 
morada
 
YES
 
|
 
NULL
 
string(1024)
 
Client
 
Address
 
descricao
 
YES
 
|
 
NULL
 
string(1024)
 
Description
 
levantamento
 
YES
 
|
 
NULL
 
datetime
 
Pickup
 
date
 
dataentrega
 
YES
 
|
 
NULL
 
datetime
 
Delivery
 
date
 
telefone
 
YES
 
|
 
NULL
 
string(50)
 
Telephone
 
hashcontrol
 
YES
 
|
 
0
 
integer
  
carga
 
YES
 
|
 
NULL
 
string(255)
 
Loading
 
address
 
datacarga
 
YES
 
|
 
NULL
 
date
 
Loading
 
date
 
horacarga
 
YES
 
|
 
NULL
 
time
 
Loading
 
Hour
 
descarga
 
YES
 
|
 
NULL
 
string(255)
 
Unloading
 
address
 
datadescarga
 
YES
 
|
 
NULL
 
date
 
Unloading
 
date
 
horadescarga
 
YES
 
|
 
NULL
 
time
 
Unloading
 
hour
 
viatura
 
YES
 
|
 
NULL
 
string(20)
 
Vehicle
 
License
 
plate
 
peso
 
YES
 
|
 
NULL
 
string(10)
 
Weight
 
of
 
goods
 
ljorigem
 
YES
 
|
 
0
 
integer
 
Origin
 
Store
 
ID
 
(some
 
documents)
 
armorigem
 
YES
 
|
 
0
 
integer
 
Origin
 
Warehouse
 
ID
 
(some
 
documents)
 
ljdestino
 
YES
 
|
 
0
 
integer
 
Destination
 
Store
 
ID
 
(some
 
documents)
 
armdestino
 
YES
 
|
 
0
 
integer
 Destination  Warehouse  ID  (some  documents)  
empanulado
 
YES
 
|
 
NULL
 
integer
 
Operator
 
ID
 
that
 
nullified
 
the
 
document
 
descanulado
 
YES
 
|
 
NULL
 
string(1024)
 
Reason
 
why
 
document
 
was
 
nullified
 
data_alteracao
 
YES
 
|
 
NULL
 
datetime
 
Date
 
at
 
which
 
the
 
document
 
was
 
modified
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 16  /  53  
  


 
descarga_localidade
 
YES
 
|
 
NULL
 
string(45)
 
Unloading
 
city
 
descarga_distrito
 
YES
 
|
 
NULL
 
string(45)
 
Unloading
 
province
 
descarga_codigo_postal
 
YES
 
|
 
NULL
 
string(45)
 
Unloading
 
postal
 
code
 
carga_localidade
 
YES
 
|
 
NULL
 
string(45)
 
Loading
 
city
 
carga_codigo_postal
 
YES
 
|
 
NULL
 
string(45)
 
Loading
 
Postal
 
Code
 
carga_distrito
 
YES
 
|
 
NULL
 
string(45)
 
Loading
 
district
 
da
 
carga
 
ATDocCodeID
 
YES
 
|
 
“”
 
string(200)
  
ATDocCodeSource
 
YES
 
|
 
“”
 
string(2)
  
motivo_isencao
 
YES
 
|
 
“”
 
string(255)
 
Tax
 
exemption
 
reason
 
description
 
isencao
 
YES
 
|
 
“”
 
string(5)
 
Exemption
 
reason
 
ID
 
vendas
 
YES
 
|
 
NULL
 
Array
 
Array
 
of
 
instances
 
of
 
sales
 
documentos_pagamento
 
YES
 
|
 
NULL
 
Array
 
Array
 
of
 
instances
 
of
 
paymentDoc
 
documentos_info  YES  |  NULL  Array  Array  of  instances  of  infoDoc  
compensacoes
 
YES
 
|
 
NULL
 
Array
 
Array
 
of
 
instances
 
of
 
counterbalance
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
dpercent
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Percent
 
Discount
 
descontos
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Discount
 
in
 
currency
 
ivaincluido
 
YES
 
|
 
0
 
integer
 Included  Taxes  0  -  No  *  
1-
 
Yes
 
docforn
 
YES
 
|
 
NULL
 
string(50)
 
Supplier’s
 
Document
 
Number
 
numpag
 
YES
 
|
 
NULL
 
string(50)
 
Number
 
of
 
the
 
payment
 
document
 
liqorigem
 
YES
 
|
 
NULL
 
string(5)
 Origin  of  Settlement   S  -  Online  
L
 
-
 
Local
 
dataDoc
 
YES
 
|
 
NULL
 
date
 
Document
 
Settlement
 
Date
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 17  /  53  
  


 
dataPagamento
 
YES
 
|
 
NULL
 
date
 
Payment
 
deadline
 
diasPagamento
 
YES
 
|
 
NULL
 
integer
 
Days
 
for
 
payment
 
arredondamento
 
YES
 
|
 
NULL
 
decimal(9,4)
 
Rounding
 
of
 
the
 
document
 
total
 
Comments
 
YES
 
|
 
NULL
 
string
 
Notes
 
to
 
the
 
document
 
CashVATScheme
 
YES
 
|
 
0
 
integer
 Document  under  the  Cash  Regime  0  -  No  *  
1
 
-
 
Yes
 
latitude
 
YES
 
|
 
NULL
 
string(25)
 
Coordinate
 
for
 
latitude
 
longitude
 
YES
 
|
 
NULL
 
string(25)
 
Coordinate
 
for
 
longitude
 
hashcontrol2
 
YES
 
|
 
NULL
 
string(25)
 Identification  field  of  the  Number  and  the  version  of  the  certification  of  the  software  that  produced  the  document,  when  it  originated  in  other  certified  software,  external  to  ZoneSoft,  and  needs  to  be  integrated  into  ZoneSoft  certified  software.  Must  have  the  standard  required  by  AT  legislation:  '000.1'.  This  field  is  obligatory  when  the  document  is  communicated  in  the  SAFT,  documents  of  the  type:  'TK',  'VD',  'FA',  'FS',  'FT',  'GT',  'GR',  
'TA',
 
'GD
 
','
 
CM
 
','
 
RC
 
'
 
 
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 18  /  53  
  


 
For
 
documents
 
of
 
the
 
type
 
‘VD’
 
and
 
'FT'
 
the
 
following
 
fields
 
are
 
mandatory:
 
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
doc
 
NO
 
|
 
 
string(10)
 
Document
 
type
 
cliente
 
NO
 
|
 
 
integer
 
Client
 
ID
 
pagamento  NO  |  
integer
 
Payment
 
type
 
ID
 
ivaincluido  
NO
 
|
 
integer
 Included  Taxes  0  -  No  *  
1-
 
Yes
 
vendas
 
NO
 
|
 
array
 
Array
 
of
 
instances
 
of
 
sales
 
fornecedor  NO  |  
integer
 
Supplier
 
ID
 
For
 
documents
 
of
 
the
 
type
 
'EC'
 
the
 
following
 
fields
 
are
 
mandatory:
 
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
doc
 
NO
 
|
 
 
string(10)
 
Document
 
type
 
cliente
 
NO
 
|
 
 
integer
 
Client
 
ID
 
pagamento  NO  |  
integer
 
Payment
 
type
 
ID
 
ivaincluido  
NO
 
|
 
integer
 Included  Taxes  0  -  No  *  
1-
 
Yes
 
vendas
 
NO
 
|
 
array
 
Array
 
of
 
instances
 
of
 
sales
 
For
 
documents
 
of
 
the
 
type
 
'TA'
 
the
 
following
 
fields
 
are
 
mandatory:
 
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
doc
 
NO
 
|
 
 
string(10)
 
Document
 
type
 
cliente
 
NO
 
|
 
 
integer
 
Client
 
ID
 
vendas
 
NO
 
|
 
array
 
Array
 
of
 
instances
 
of
 
sales
 
armorigem  
NO
 
|
 
integer
 
Warehouse
 
ID
 
of
 
origin
 
ardestino  
NO
 
|
 
integer
 
Warehouse
 
ID
 
of
 
destination
 
ljdestino  NO  |  
integer
 
Store
 
ID
 
of
 
destination
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 19  /  53  
  


 
datacarga  NO  |  
date
 
Loading
 
date
 
horacarga  NO  |  
time
 
Loading
 
Hour
 
datadescarga  NO  |  
date
 
Unloading
 
date
 
horadescarga  NO  |  
time
 
Unloading
 
hour
 
carga  NO  |  string(255)  Loading  address  
carga_codigo_postal  NO  |  
string(45)
 
Loading
 
Postal
 
Code
 
carga_localidade  NO  |  
string(45)
 
Loading
 
city
 
descarga  NO  |  
string(255)
 
Unloading
 
address
 
descarga_codigo_postal  NO  |  string(45)  Unloading  Postal  Code  
descarga_localidade  NO  |  
string(45)
 
Unloading
 
city
 
armorigem  NO  |  
integer
 
Origin
 
Warehouse
 
ID
 
armdestino  NO  |  
integer
 
Warehouse
 
ID
 
of
 
destination
 
 
Delivery  -  v2.1   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
contacto
 
YES
 
|
 
NULL
 
string(50)
 
Phone
 
number
 
dataentrega
 
NO
 
|
 
datetime
 Delivery  date  and  time  
morada  NO  |  string(1024)  Delivery  address  
obs  
YES
 
|
 
NULL
 
string(256)
 
Observations
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Exemptionreason  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
  
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 20  /  53  
  


 
codigo
 
NO
 
|
 
 
string(5)
 
ID
 
(ex:
 
M01)
 
descricao
 
NO
 
|
 
 
string(255)
 
Description
 
norma
 
NO
 
|
 
 
string(255)
 
Motive’s
 
Legislative
 
regulation
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Family  -  v1.2   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
 
integer
 
ID
 
descricao
 
NO
 
|
 
string(50)
 
Description
 
frontoffice
 
YES
  
|
 
1
 
integer
 Visible  in  frontoffice  0  -  No  
1
 
-
 
Yes
 
*
 
posicaofront
 
YES
  
|
 
0
 
integer
 
Position
 
in
 
frontoffice
 
posicaoprint
 
YES
  
|
 
0
 
integer
 
Position
 
in
 
printout
 
fundo
 YES  |  
“#808080”
 
string(10)
 
Background
 
color
 
(HTML
 
color
 
code)
 
letra
 YES   |  
"#FFFFFF"
 
string(10)
 
Color
 
for
 
the
 
letter
 
(HTML
 
color
 
code)
 
tipo
 
NO
 
|
 
0
 
integer
 Type  of  family  0  -  Beverage  *  
1
 
-
 
Food
 
subfamilies
 
NO
 
|
 
 
array
 Instances  of  the  SubFamily  entity  that  
belong
 
to
 
the
 
Family
 
instance
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Group  -  v2.0   
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 21  /  53  
  


 
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
integer
 
ID
 
descricao
 
NO
 
|
 
 
string(50)
 
Description
 
comentauto  YES  |  0  integer  Automatic  comments  0  -  No  *  1  -  Yes  
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Happyhour  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
integer
 
ID
 
descricao
 
NO
 
|
 
 
string(50)
 
Description
 
inicio
 
NO
 
|
 
 
time(HH:mm:ss)
 
Start
 
Time
 
fim  NO  |    time(HH:mm:ss)  End  time  
dom  NO  |  0  integer  Happyhour  is  active  on  Sundays:  0  -  No  *  1  -  Yes  
seg  NO  |  0  integer  Happyhour  is  active  on  Mondays:  0  -  No  *  1  -  Yes  
ter  NO  |  0  integer  Happyhour  is  active  on  Tuesdays:  0  -  No  *  1  -  Yes  
qua  NO  |  0  integer  Happyhour  is  active  on  Wednesdays:  0  -  No  *  1  -  Yes  
qui  NO  |  0  integer  Happyhour  is  active  on  Thursdays:  0  -  No  *  1  -  Yes  
sex  NO  |  0  integer  Happyhour  is  active  on  Fridays:  0  -  No  *  
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 22  /  53  
  


 
1  -  Yes  
sab  NO  |  0  integer  Happyhour  is  active  on  Saturdays:  0  -  No  *  1  -  Yes  
fer  NO  |  0  integer  Happyhour  is  active  on  holidays:  0  -  No  *  1  -  Yes  
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Movements -  v2.3   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
id
 
NO
 
|
 
integer
 
Movements
 
ID
 
loja
 
NO
 
|
 
 
integer
 
Store
 
ID
 
cartao  NO  |  NULL  integer  Customer  card  number  used  for  payment  
codigo
 
NO
 
|
 
NULL
 
integer
 ID  
pos  NO  |  NULL  integer  POS  ID  
emp  NO  |  NULL  integer  Operator  ID  
nome  NO  |  NULL  string(50)  Name  
data  NO  |  NULL  data  Date  
datahora  NO  |  NULL  datatime  The  datetime  instance  was  saved  
valor  NO  |  NULL  decimal(19,4)  Value  
descricao  NO  |  NULL  string(255)  Description  
qtd  NO  |  NULL  decimal(19,4)  Existing  product  quantity  affects  this  bar  code  
serie  NO  |  NULL  integer  Serie  
sync  NO  |  NULL  integer  Movement  Syncro nized  
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 23  /  53  
  


 
codprom  NO  |  NULL  integer  Promotion  ID  
processado  NO  |  NULL  integer  Movement  Processed  
lastupdate  YES  |  NULL  datatime  Instance's  last  update  timestamp  
id_loja  NO  |  integer  Store  ID  
 
Operator  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
integer
 
Store
 
ID
 
codigo
 
NO
 
|
 
integer
 
ID
 
nome
 
NO
 
|
 
 
string(50)
 
Name
 
datacriacao
 
NO
 
|
 
 
datetime
 
Date
 
on
 
which
 
registration
 
was
 
created
 
gestaocaixa
 NO  |  0  
integer
 
Can
 
manage
 
the
 
teller
 
0
 
-
 
Can
 
not
 
open
 
or
 
close
 
*
 
1
 
-
 
Full
 
control
 
2
 
-
 
Just
 
open
 
and
 
close
 
frontoffice
 
NO
 
|
 
0
 
integer
 
Types
 
of
 
operations
 0  -  Point,  Internal  Consumption  and  
Frontoffice
 
*
 
1
 
-
 
Point
 
Only
 
and
 
Internal
 
Consumption
 
password
 
YES
 
|
 
“”
 
string(50)
 
Employee
 
Password
 
(MD5)
 
foto
 YES  |  NULL  string  
base64encoded
 
Picture
 
bloqueado
 
YES
 
|
 
0
 
integer
 Blocked  0  -  No  *  
1
 
-
 
Yes
 
obs
 YES  |   
string(250)
 
Comments
 
identificação
 YES  |  
string(50)
 
Identification
 
document
 
number
 
telefone
 
YES
 
|
 
string(50)
 
Telephone
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 24  /  53  
  


 
email
 
YES
 
|
 
string(255)
 
Email
 
demissao
 
YES
 
|
 
datetime
 
Date
 
of
 
dismissal
 
cor
 YES  |  
“#000000”
 
string(10)
 
Registered
 
line
 
color
 
(HTML
 
color)
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
postos
 
NO
 
|
 
 
array
 Array  of  JSON  objects  with  information  about  the  sales  points  that  the  Operator  has  access  to.  Example:  [{“codigo”:1,”descricao”:”Sale  point  
description”}]
 
zonas
 
NO
 
|
 
array
 Array  of  JSON  objects  with  information  about  the  zones  that  the  Operator  has  access  to.  
Example:
 
[{“codigo”:1,”descrição”:”descrição
 
Zone”}]
 
cashe  YES  |  NULL  decimal(19,4)  Operator  Cache  
comissao  YES  |  NULL  decimal(19,4)  Percentage  to  calculate  commission  
limite_ci_dia  YES  |  NULL  decimal(19,4)  Limit  daily  internal  consumption  
limite_ci_doc  YES  |  NULL  decimal(19,4)  Internal  consumption  limit  per  document  
permissoes  NO  |  array  Array  of  JSON  objects  with  the  information  regarding  the  permissions  that  the  Operator  has.  Example:  [{“loja”:1,”operador”:1,”permissao”:1}]  
transparente  YES  |  0  integer  Activate  the  color  on  the  consumption  line:  0  -  No  *  1  -  Yes  
 
Option  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
integer
 
ID
 
descricao
 
NO
 
|
 
 
string(50)
 
Description
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 25  /  53  
  


 
grupo  NO  |  integer  Group  ID  
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
PaymentDoc  -  v1.2   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
integer
 
Store
 
ID
 
numero
 
No
 
|
 
 
integer
 
Document
 
number
 
doc
 
NO
 
|
 
 
string(2)
 
Document
 
type
 
tipo
 
NO
 
|
 
 
integer
 
Type
 
of
 
payment
 
(See
 
Table)
 
valor
 
NO
 
|
 
 
decimal(19,4)
 
Amount
 
of
 
payment
 
partial
 
cartao
 
NO
 
|
 
0
 
integer
 
Customer
 
card
 
number
 
used
 
for
 
payment
 
serie
 
NO
 
|
 
‘’
 
string(20)
 
Document
 
serie
  Nota :  Quando  o  tipo  está  a  0  tem  o  valor  total  do  documento.  
PaymentOptions  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
id
 
NO
 
|
 
integer
 ID  
descricao
 
YES
 
|
 
NULL
 
string(50)
 
Description
 
dias
 
YES
 
|
 
NULL
 
string(2)
 
Days
 
for
 
payment
 
 
PaymentType  -  v2.11   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 26  /  53  
  


 
codigo
 
NO
 
|
 
integer
 
ID
 
descricao
 
NO
 
|
 
string
 
Description
 
bill  YES  |  1  integer  Present  in  'show  account'  
sale  YES  |  1  integer  Sale  
depositar  YES  |  0  integer  Present  on  the  deposit  slip  
comissao  NO  |  decimal(19,4)  Percentage  value  of  the  commission  to  apply  
financeiro  NO  |  integer  Available  for  FF  0  -  No  1  -  Yes  
editavel  NO  |  integer  Available  for  edit  0  -  No  1  -  Yes  
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Product  -  v2.8   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
0
 
integer
 
Store
 
ID
 
 
codigo
 
NO
 
|
 
0
 
integer
 
ID
 
descricao
 
NO
 
|
 
“”
 
string(50)
 
Description
 
família
 
NO
 
|
 
0
 
integer
 
Family
 
ID
 
subfam
 
NO
 
|
 
0
 
integer
 
Subfamily
 
ID
 
unidade
 
NO
 
|
 
0
 
integer
 
Unit
 
ID
 
iva
 
NO
 
|
 
0
 
decimal
 
Tax
 
fornecedor
 
YES
 
|
 
0
 
integer
 
Supplier
 
ID
 
foto
 
YES|””
 string  
base64encoded
 
Picture
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 27  /  53  
  


 
precocompra
 
YES
 
|
 
0
 
decimal
 
Purchase
 
price
 
dataultcompra
 
YES
 
|
 
0
 
date
 
Date
 
of
 
last
 
purchase
 
ultprecocompra
 
YES
 
|
 
0
 
decimal
 
Last
 
purchase
 
price
 
datacriacao
 
NO|
 
NOW()
 
date
 
Creation
 
Date
 
obs
 
YES|””
 
string(250)
 
Comments
 
retalho
 
NO
 
|
 
0
 
integer
 Available  for  sale:  0  -  No  *  
1
 
-
 
Yes
 
ultprecovenda
 
YES
 
|
 
0
 
decimal
 
Last
 
sale
 
price
 
topo
 
YES
 
|
 
0
 
integer
 Active  Bestsellers:  0  -  No  *  
1
 
-
 
Yes
 
cozinha
 
YES
 
|
 
0
 
integer
 
Code
 
Center
 
Production:
 
0
 
deactivated
 
 
grupo
 
YES
 
|
 
0
 
integer
 
Comment
 
group
 
ID
 
referencia
 
YES
 
|
 
0
 
string(50)
 
Reference
 
ivacompra
 
YES
 
|
 
0
 
decimal
 
Purchase
 
tax
 
balanca
 
YES
 
|
 
0
 
integer
 Sold  to  weight:  0  -  No  *  
1
 
-
 
Yes
 
qtdstock
 
YES
 
|
 
0
 
decimal
 
Quantity
 
to
 
be
 
withdrawn
 
from
 
stock
 
stocks
 
YES
 
|
 
0
 
integer
 Stock  activ:  0  -  No  *  
1
 
-
 
Yes
 
meiadose
 
YES
 
|
 
0
 
integer
 Half-dose  active:  0  -  No  *  
1
 
-
 
Yes
 
 
qtdmeia
 
YES
 
|
 
0
 
decimal
 
Amount
 
of
 
half-dose
 
ordemtop
 
YES
 
|
 
0
 
integer
 
Order
 
in
 
the
 
best
 
sellers
 
ordem
 
YES
 
|
 
0
 
integer
 
Order
 
in
 
families
 
ordemlocal
 
YES
 
|
 
0
 
integer
 
Priority
 
in
 
searches
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 28  /  53  
  


 
listseparado
 
YES
 
|
 
0
 
integer
 
Separate
 
list
 
in
 
orders
 
codbarras
 
YES
 
|
 
0
 
string(20)
 
Main
 
barcode
 
armazem
 
YES
 
|
 
0
 
integer
 
Warehouse
 
ID
 
tempoprep
 
YES
 
|
 
0
 
time
 
Preparation
 
time
 
maxopcoes
 
YES
 
|
 
0
 
integer
 
Maximum
 
number
 
of
 
extras
 
iva2
 
YES
 
|
 
0
 
decimal
 
Second
 
sales
 
tax
 
tara
 
YES
 
|
 
0
 
decimal
 
Product
 
tare
 
prepagamento
 
YES
 
|
 
0
 
integer
 Active  prepayment:  0  -  No  *  
1
 
-
 
Yes
 
fundo
 NO  |  
"#808080"
 
string(10)
 
Background
 
color
 
(HTML
 
color)
 
letra
 NO  |  
"#FFFFFF"
 
string(10)
 
Font
 
color
 
(HTML
 
color)
 
descricaocurta
 
YES
 
|
 
“”
 
string(50)
 
Short
 
Description
 
margembruta
 
YES
 
|
 
0
 
decimal
 
Gross
 
product
 
gross
 
margin
 
 
codigopp
 
YES
 
|
 
0
 
integer
 
PLU
 
consumominimo
 
YES
 
|
 
0
 
integer
 
Exclude
 
from
 
minimum
 
consumption
 
vendersemstock
 
NO
 
|
 
0
 
integer
 Enable  to  sell  without  stock:  0  -  No  *  
1
 
-
 
Yes
 
dosedesc
 
YES
 
|
 
“”
 
string(50)
 
Description
 
for
 
Dose
 
meiadosedesc
 
YES
 
|
 
“”
 
string(50)
 
Description
 
for
 
Half-Dose
 
categoria
 
YES
 
|
 
0
 
integer
 
Merchandise
 
Category
 
subcategoria
 
YES
 
|
 
0
 
integer
 
Subcategory
 
Merchandise
 
isencao
 
YES
 
|
 
0
 
string(20)
 
Tax
 
Exemption
 
reason
 
ID
 
precovenda
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
1
 
precomeia
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
Half-dose
 
1
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 29  /  53  
  


 
revenda
 
YES
 
|
 
0
 
integer
 Enable  resale:  0  -  No  *  
1
 
-
 
Yes
 
precorevenda
 
YES
 
|
 
0
 
decimal
 
Resale
 
price
 
ivarevenda
 
YES
 
|
 
0
 
decimal
 
Resale
 
VAT
 
autoquebra
 
YES
 
|
 
0
 
integer
 Enable  auto  break  at  the  end  of  the  day:  0  -  No  *  
1
 
-
 
Yes
 
pvp2
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
2
 
pvp3
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
3
 
pvp4
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
4
 
pvp5
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
5
 
pvp6
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
6
 
pvp7
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
7
 
pvp8
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
8
 
pvp9
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
9
 
pvp10
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
10
 
pvpmeia2
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
Half-dose
 
2
 
pvpmeia3
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
Half-dose
 
3
 
 
pvpmeia4
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
Half-dose
 
4
 
pvpmeia5
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
Half-dose
 
5
 
pvpmeia6
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
Half-dose
 
6
 
 
pvpmeia7
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
Half-dose
 
7
 
pvpmeia8
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
Half-dose
 
8
 
pvpmeia9
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
Half-dose
 
9
 
pvpmeia10
 
YES
 
|
 
0
 
decimal
 
Sale
 
price
 
Half-dose
 
10
 
precominimo
 
YES
 
|
 
0
 
decimal
 
Minimum
 
sale
 
price
  
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 30  /  53  
  


 
excluirdescontos
 
YES
 
|
 
0
 
integer
 
Disallow
 
product
 
from
 
any
 
discount
 
restricted
 
YES
 
|
 
0
 
integer
 
Product
 
can
 
only
 
be
 
sold
 
to
 
people
 
over
 
18
 
retencao
 
YES
 
|
 
0
 
integer
 
Product
 
makes
 
withholding
 
tax
 
percentagemretencao
 
YES
 
|
 
0.00
 
decimal
 
Percentage
 
of
 
retention
 
codigosbarras
 
YES
 
|
 
“”
 
string
 String  with  all  product  bar  codes  separated  by  commas  (,)  -  except  for  the  barcode  in  the  
codbarras
 
property
 
if
 
it
 
exists.
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
caracteristicas
 
YES
 
|
 
NULL
 
Array
 
Array
 
of
 
instances
 
of
 
ProductCharacteristic
 
 
produtos_codigosbarras  YES  |  NULL  Array  Array  of  instances  of  ProductBarcode.   
produtos_propriedades  
YES
 
|
 
NULL
 
Array
 
Array
 
of
 
instances
 
of
 
ProductProperties
 
 
produtoscentrosprod  YES  |  NULL  Array  Array  of  instances  of  Produtoscentrosprod   
famlojasanalogas  YES  |  NULL  Array  Array  of  instances  of  Famlojasanalogas   
 Note :  codigosbarras  
contains
 
partial
 
information
 
(barcodes
 
only)
 
of
 produtos_codigosbarras .  
When
 
saving,
 
whenever
 
produtos_codigosbarras
  
Array,
 
even
 
if
 
empty,
 
this
 
value
 
takes
 
precedence
 
over
 
the
 
values
 
of
 
codigosbarras
.
  Note :  
produtos_propriedades
 
and
 
características
 
are
 
mutually
 
exclusive:
 
A
 
product
 
CANNOT
 
have
 
both
 
produtos_propriedades
 
and
  
características.
 
If
 
a
 
Product
 
has
 
produtos_propriedades
 
then
 
características
 
MUST
 
BE
 
null.
 
If
 
a
 
Product
 
has
 
características
 
then
 
produtos_propriedades
 
MUST
 
BE
 
null.
 
 
 
ProductBarcode  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
integer
 
Product
 
ID
 
codbarras
 
NO
 
|
 
string(50)
 
 
bar
 
code
 
qtd
 
YES|
 
 
decimal(19,4)
 Existing  product  quantity  affects  this  bar  
code
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 31  /  53  
  


 
 
ProductCharacteristic  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
produto
 
NO
 
|
 
0
 
integer
 
Product
 
ID
 
uid
 
NO
 
|
 
0
 
integer
 ID  -  Code  that  identifies  the  combination  of  
values
 
of
 
various
 
characteristics
 
in
 
a
 
product.
 
descricao
 
YES
 
|
 
‘’
 
string(500)
 Description  -read  only;  this  value  is  not  
written
 
to
 
the
 
database.
 
variacao_preco_venda
 
NO
 
|
 
0.00
 
decimal
 Variation  in  sales  price  that  the  combination  of  characteristic  values  will  have  on  the  
product.
 
preco_compra  NO  |  0.00  decimal  Purchase  price  
codigo_barras
 
YES
 
|
 
‘’
 
string(100)
 bar  code  of  the  combination  of  
characteristics
 
+
 
product
 
values
 
estado
 
NO
 
|
 
1
 
integer
 A  state  that  defines  whether  the  combination  of  characteristic  values  is  active  or  inactive  
for
 
the
 
product
 
0
 
-
 
Inactive
 
1
 
-
 
Active
 
*
 
valores
 
NO
 
|
 
NULL
 
Array
 Array  of  instances  of  
ProductCharacteristicsValue
 
 
 
ProductCharacteristicsValue  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
integer
 
ID
 
valor
 
NO
 
|
 
string(100)
 
 
Characteristic
 
Value.
 
For
 
example:
 
’xxl’
 
 
estado
 
NO
 
|
 
1
 
integer
 State  that  defines  whether  the  value  is  active  
for
 
the
 
characteristic
 
0
 
-
 
Inactive
 
1
 
-
 
Active
 
*
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 32  /  53  
  


 
codigo_caracteristica
 
NO
 
|
 
 
integer
 ID  of  the  characteristic  to  which  this  value  
belongs
 
descricao_caracteristica
 
NO
 
|
 
 
string(100)
 Description  of  the  characteristic  to  which  this  
value
 
belongs
 
 
ProductProperty  -  v2.4   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
cod_produto
 
NO
 
|
 
 
integer
 
Product
 
ID
 
cod_propriedade
 
NO
 
|
 
 
integer
 
Property
 
ID
 
uid
 
NO
 
|
 
 
integer
 
Property
 
ID
 
-
 
alias
 
of
 
cod_propriedade
 
estado
 
NO
 
|
 
1
 
integer
 Status  for  the  product  +  property  relation.  0  -  inactive/disabled  1  -  active/enabled  *  
 
Productioncentre  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
integer
 
ID
 
descricao
 
NO
 
|
 
 
string(50)
 
Description
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
ProductStock  -  v2.1  -  Read  only  entity   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
 
integer
 
Store
 
ID
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 33  /  53  
  


 
armazem
 
NO
 
|
 
0
 
integer
 
Warehouse
 
ID
 
produto
 
NO
 
|
 
 
integer
 
Product
 
ID
 
stock
 
NO
 
|
 
0
 
decimal
 
Quantity
 
in
 
stock
 
stkmin
 
NO
 
|
 
0
 
decimal
 
Minimum
 
stock
 
quantity
 
stkmax
 
NO
 
|
 
0
 
decimal
 
Maximum
 
stock
 
quantity
 
data
 
YES
 
|
 
 
date
 
Request
 
Date
 
 
Store
 
YES
 
|
 
“”
 
Store
 An  instance  of  the  Store  entity.  It  is  used  only  in  Responses  to  Requests  of  ProductStocks::getCurrentStockInStores
.
 
 
uid_caracteristica  NO  |  0  integer  Characteristics  combo  ID  
stock_uninventario  NO  |  0  decimal  Quantity  in  stock  in  Inventory  unit  
stock_uncompra  NO  |  0  decimal  Quantity  in  stock  in  Buying   unit  
 
Productstockmovement  -  v2.1  -  Read  only  entity   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
 
integer
 
Store
 
ID
 
id  NO  |  integr  Movement  ID  
armazem
 
NO
 
|
 
0
 
integer
 
Warehouse
 
ID
 
produto
 
NO
 
|
 
 
integer
 
Product
 
ID
 
descricao  NO  |  string  Product  description  (includes  characteristics  values  if  any)  
qtd
 
NO
 
|
 
0
 
decimal
 
Quantity
 
moved
 
doc  NO  |  string  Documents’  ID  
serie  NO  |  string  Document’s  serie  
numero  NO  |  string  Document’s  number  
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 34  /  53  
  


 
datahora
 
NO
 
|
 
 
datetime
 
Date
 
time
 
the
 
movement
 
occured
 
uid_caracteristica  NO  |  0  integer  Characteristics  combo  ID  
 
Property  -  v2.4   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
 
integer
 
Store
 
ID
 
id
 
NO
 
|
 
0
 
integer
 
Property
 
ID
 
nome
 
NO
 
|
 
 
string
 
The
 
property
 
description
 
compra
 
NO
 
|
 
0
 
integer
 Sets  how  the  property  value  will  be  handled  for  a  product  when  a  supplier  document  is  issued  on  our  softwares:  0  -  Does  not  apply  *  1  -  Optional  
2
 
-
 
Mandatory
 
ativo
 
NO
 
|
 
1
 
integer
 Sets  the  property  status:  0  -  Inactive/disabled  
1
 
-
 
Active/enabled
 
*
 
ordenacao
 
NO
 
|
 
“nofx”
 
string
 Defines  the  priority  for  the  property  values  upon  selling:  nofx  -  No  effect/ignore  *  fifo  -  First  In  -  First  Out  
lifo
 
-
 
Last
 
In
 
-
 
First
 
Out
 
tipo_dados
 
NO
 
|
 
“string”
 
string
 Data  type  for  the  values  for  the  property:  string  -  text  value  *  date  -  date  value  datetime  -  datetime  value  numeric  -  numbers   These  values  affects  how  the  field  will  be  rendered  on  apps’  forms.  
valores_multiplos
 
NO
 
|
 
0
 
integer
 Flag  that  identifies  if  property  should  accept  
multiple
 
values
 
when
 
buying/selling
 
venda  NO  |  0  integer  Sets  how  the  property  value  will  be  handled  for  a  product  when  an  invoice  document  is  issued  on  our  softwares:  0  -  Does  not  apply  *  
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 35  /  53  
  


 
1  -  Optional  -  will  force  property.compra  =  0  2  -  Mandatory  
Note:  If  property.venda  =  1  the  API  will  forcely  set  property.compra   =  0.   
 
ReasonBreak  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
integer
 
ID
 
descricao
 
NO
 
|
 
string(50)
 
Description
 
reposicao
 
YES
 
|
 
0
 
integer
 
Refund:
 
 
0
 
-
 
No
 
*
 
1
 
-
 
Yes
 
lastupdate
 
NO
 
|
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Sale  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
 
integer
 
Store
 
ID
 
 
numero
 
NO
 
|
 
 
integer
 
Document
 
number
 
doc
 
NO
 
|
 
 
string(10)
 
Document
 
type
 
data
 
NO
 
|
 
 
date
 
Date
 
datahora
 
NO
 
|
 
 
datetime
 
Date/time
 
of
 
product
 
sales
 
id
 
YES
 
|
 
0
 
integer
 
ID
 
(sequential)
 
 
codigo
 
YES
 
|
 
NULL
 
integer
 
Product
 
ID
 
descricao
 
YES
 
|
 
NULL
 
string(50)
 
Product
 
Description
 
iva
 
YES
 
|
 
NULL
 
decimal
 
VAT
 
Tax
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 36  /  53  
  


 
qtd
 
YES
 
|
 
0
 
decimal(19,4)
 
Quantity
 
punit
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Unit
 
price
 
of
 
the
 
product
 
valor
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Net
 
total
 
 
desconto
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Discount
 
Value
 
desconto2
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Discount
 
Value
 
2
 
total
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Total
 
of
 
product
 
sales
 
posto
 
YES
 
|
 
0
 
integer
 
POS
 
ID
 
empid
 
YES
 
|
 
0
 
integer
 
Operator
 
ID
 
armazem
 
YES
 
|
 
0
 
integer
 
Warehouse
 
ID
 
qtdstock
 
YES
 
|
 
1.00
 
decimal(19,4)
 
Quantity
 
to
 
be
 
withdrawn
 
from
 
stock
 
prodstock
 
YES
 
|
 
0
 
integer
 
Product
 
ID
 
contribuinte
 
YES
 
|
 
NULL
 
string(20)
 
Client
 
VAT
 
number
 
origem
 
YES
 
|
 
0
 
integer
 
Origin
 
of
 
consumption
 
(tables
 
or
 
cards)
 
codprom
 
YES
 
|
 
NULL
 
integer
 
Promotion
 
ID
 
serie
 
NO
 
|
 
NULL
 
string(20)
 
Document
 
serie
 
lote
 
NO
 
|
 
NULL
 
string(255)
 
Product
 
Lot
 
desperdicio
 
YES
 
|
 
NULL
 
decimal
 
Quantity
 
of
 
waste
 
ljorigem
 
YES
 
|
 
NULL
 
integer
 
Store
 
ID
 
of
 
origin
 
armorigem
 
YES
 
|
 
NULL
 
integer
 
Warehouse
 
ID
 
of
 
origin
 
ljdestino
 
YES
 
|
 
NULL
 
integer
 
Store
 
ID
 
of
 
destination
 
armdestino
 
YES
 
|
 
NULL
 
integer
 
Warehouse
 
ID
 
of
 
destination
 
unidade
 
YES
 
|
 
0
 
integer
 
Unit
 
ID
 
motivo_isencao
 
YES
 
|
 
NULL
 
string(255)
 
Description
 
of
 
the
  
exemption
 
reason
 
isencao
 
NO
 
|
 
‘’
 
string(5)
 
Exemption
 
reason
 
ID
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 37  /  53  
  


 
descforn
 
NO
 
|
 
‘’
 
string(50)
 
Supplier
 
Description
 
referencia
 
NO
 
|
 
‘’
 
string(50)
 
Reference
 
refforn
 
NO
 
|
 
‘’
 
string(50)
 
Supplier
 
reference
 
ddoc
 
NO
 
|
 
0
 
decimal(9,4)
 
Discount
 
document
 
dpercent
 
NO
 
|
 
0
 
decimal(9,4)
 
Percent
 
Discount
 
dvalor
 
NO
 
|
 
0
 
decimal(9,4)
 
Discount
 
on
 
value
 
dextenso
 
NO
 
|
 
0
 
decimal(9,4)
 
Extensive
 
discount
 
obs
 
NO
 
|
 
‘’
 
string
 
Comments
 
 
pvp
 
NO
 
|
 
0
 
decimal(9,4)
 
Sale
 
price
 
validade
 
NO
 
|
 
 
date
 
Expiration
 
date
 
qtdunidades
 
NO
 
|
 
 
decimal(9,4)
 
Product
 
of
 
(Quantity
 
*
 
conversion
 
factor)
 
PrecoLiquido
 
NO
 
|
 
0
 
decimal(9,4)
 
Net
 
price
 
uid_caracteristica
 
NO
 
|
 
0
 
integer
 
Characteristics
 
combo
 
ID
 
 
SalesDay  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
 
integer
 
Store
 
ID
 
data
 
NO
 
|
 
 
date
 
Teller
 
Date
 
caixa
 
NO
 
|
 
 
integer
 
Teller
 
ID
 
Open
 
NO
 
|
 
0
 
integer
 
Day
 
of
 
Sale
 
status
 
0
 
-
 
Open
 
*
 
1
 
-
 
Closed
 
dataopen
 
NO
 
|
 
 
datetime
 
Opening
 
date/time
 
opencx
 
YES
 
|
 
NULL
 
varchar(50)
 
Opening
 
Operator
 
ID
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 38  /  53  
  


 
dataclose
 
YES
 
|
 
NULL
 
datetime
 
Closing
 
date/time
 
closecx
 
YES
 
|
 
NULL
 
varchar(50)
 
Closing
 
Operator
 
ID
 
saidascx
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Cash
 
Outflows
 
vd
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
VD
 
‘Venda
 
a
 
Dinheiro’
 
tk
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
TK
 
‘Tickets’
 
cc
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
credit
 
invoices
 
ci
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
intern
 
consumption
 
nc
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
credit
 
notes
 
rc
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
receipts
 
ad
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
down
 
payments
 
movimento
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Cash
 
movement
 
ammount
 
num
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
cash
 
chq
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
checks
 
deb
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
debit
 
cards
 
crd
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
credit
 
cards
 
entradascx
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Cash
 
incoming
 
enc
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
orders
 
adi
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
down
 
payments
 
cartoes
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
paid
 
on
 
customer
 
card
 
etk
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
paid
 
on
 
Euroticket
 
comissaomb
 
YES
 
|
 
NULL
 
decimal(19,4)
 
TPA
 
commission
 
value
 
numordem
 
YES
 
|
 
NULL
 
integer
  
fs
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
simplified
 
invoices
 
ft
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
invoices
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 39  /  53  
  


 
 
SalesDayDetails  -  v3.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
 integer  Store  ID  
caixa  
NO
 
|
 
 integer  Teller  ID  
periodo
 
NO
 
|
 
 
integer
 Period  
data
 
NO
 
|
 
 
datetime
 Date  
pagamento
 
NO
 
|
 
integer
 Payment  ID  
valor
 
YES
 
|
 
NULL
 
decimal(19,4)
 Amount  
comissao
 
YES
 
|
 
NULL
 decimal(19,4)  Commission   
obs  YES  |  NULL  
varchar(1024)
 Observations  
 
SalesSession  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
 
integer
 
Store
 
ID
 
idcx
 
NO
 
|
 
 
integer
 
ID
 
(session)
 
caixa
 
NO
 
|
 
 
integer
 
Teller
 
ID
 
dataopen
 
NO
 
|
 
datetime
 
Opening
 
Date/time
 
data
 
YES
 
|
 
NULL
 
date
 
Date
 
opencx
 
YES
 
|
 
NULL
 
varchar(50)
 
Opening
 
Operator
 
ID
 
dataclose
 
YES
 
|
 
NULL
 
datetime
 
Closing
 
Date/time
 
closecx
 
YES
 
|
 
NULL
 
varchar(50)
 
Closing
 
Operator
 
ID
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 40  /  53  
  


 
saldoinicial
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Opening
 
balance
 
saldofinal
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Closing
 
balance
 
saidascx
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Cash
 
Outflows
 
vd
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
VD
 
‘Venda
 
a
 
Dinheiro’
 
tk
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
TK
 
‘Tickets’
 
cc
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
credit
 
invoices
 
ci
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
intern
 
consumption
 
nc
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
credit
 
notes
 
rc
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
receipts
 
ad
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
down
 
payments
 
movimento
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
caixa
 
num
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
cash
 
chq
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
checks
 
deb
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
debit
 
cards
 
crd
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Value
 
in
 
credit
 
cards
 
entradascx
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Cash
 
incoming
 
enc
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
orders
 
adi
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
down
 
payments
 
contado
 
YES
 
|
 
0
 
integer
 Cash  was  verified  0  -  No  *  
1
 
-
 
Yes
 
empid
 
YES
 
|
 
0
 
integer
 
Verifying
 
Operator
 
ID
 
status
 
YES
 
|
 
0
 
integer
 Status  0  -  Closed  *  
1
 
-
 
Open
 
cartoes
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
paid
 
on
 
customer
 
card
 
etk
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
paid
 
on
 
Euroticket
  
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 41  /  53  
  


 
contnum
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
accounted
 
in
 
cash
 
contchq
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
accounted
 
in
 
cheque
 
contdeb
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
accounted
 
in
 
cartão
 
de
 
débito
 
contcrd
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
accounted
 
in
 
cartão
 
de
 
crédito
 
contetk
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
accounted
 
in
 
Euroticket
 
fs
 
YES
 
|
 
NULL
 
decimal(19,4)
 
Amount
 
in
 
simplified
 
invoices
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Salestation  -  v1.8   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
 
integer
 
Store
 
ID
 
armazem
 
NO
 
|
 
 
integer
 
Wharehouse
 
ID
 
codigo
 
NO
 
|
 
 
integer
 
ID
 
descricao
 
NO
 
|
 
varchar(50)
 
Description
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
perfilmaisvendidos
 
NO
 
|
 
0
 
integer
 
Most
 
selled
 
role/profile
 
ID
 
postoszonas
 
YES
 
|
 
NULL
 
array
 Array  of  JSON  objects  with  information  about  the  zones  that  the  Salestation  has  access  to.  
Example:
 [{“zona”:1},{“zona”:2}]  
versao
 
YES
 
|
 
NULL
 
varchar(50)
 
Software
 
version
 
(read
 
only)
 
zona
 
YES
 
|
 
NULL
 
integer
 
SaleZone
 
ID
 
SaleStationSettings  YES  |  NULL   array  Array  of  instances  SaleStationSetting .  Only  available  on  specific  requests  
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 42  /  53  
  


 
 
SaleStationSetting  -  v1.8   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
chave
 
YES
 
|
 
 
varchar(100)
 
Description
 
(read
 
only)
 
idconfig
 
NO
 
|
 
 
integer
 
Setting
 
ID
 
idloja
 
NO
 
|
 
 
integer
 
Store
 
ID
 
idposto
 
NO
 
|
 
integer
 
SaleStation
 
ID
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
valor
 
NO
 
|
 
 
varchar(150)
 
Setting
 
value
 
 
Salezone  -  v2.8   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
 
integer
 
Store
 
ID
 
codigo
 
NO
 
|
 
 
integer
 
Sale
 
zone
 
ID
 
centroproducao  YES  |  0  integer  Production  Center  ID  
descricao
 
YES
 
|
 
NULL
 
varchar(50)
 
Description
 
precozona
 
YES
 
|
 
0
 
integer
 Sale  price  table  ID  
tabelaiva  
YES
 
|
 
0
 
integer
 Tax  table  ID   
interno  YES  |  0  integer  Internal  ID  
printercontas  YES  |  0  integer  Printer  Accounts  ID  
printerdocs  YES  |  0  integer  Printer  Documents  ID  
height  YES  |  0  integer  Height  
width  YES  |  0  integer  Width  
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 43  /  53  
  


 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
zonas_pagamentos  YES  |  NULL   array  Array  of  instances  zonas_pagamentos .  Only  available  on  specific  requests  
 
Signeddocumentscount  -  v2.1  -  Read  only  entity   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
lastupdate
 
NO
 
|
 
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
month
 
NO
 
|
 
 
integer
 
Month
 
number
 
invoicedocuments
 
NO
 
|’
 
integer
 The  amount  of  invoice  documents  (FT,  VD)  
created
 
in
 
the
 
current
 
year
 
+
 
month
 
workingdocuments  
NO
 
|’
 
integer
 The  amount  of  working  documents  (EC)  
created
 
in
 
the
 
current
 
year
 
+
 
month
 
year  NO  |  integer  Year  
 
Store  -  v1.3   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
0
 
integer
 
ID
 
descricao
 
YES
 
|
 
NULL
 
string(50)
 
Description
 
designacao
 
YES
 
|
 
NULL
 
string(50)
 
Commercial
 
Name
 
contribuinte
 
YES
 
|
 
NULL
 
string(20)
 
VAT
 
Number
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Last
 
sync
 
from
 
store
 
 
logotipo
 
YES
 
|
 
NULL
 string  
base64encoded
 
Logo
 
morada
 
YES
 
|
 
NULL
 
string(200)
 
Address
 
numero_porta
 
YES
 
|
 
NULL
 
string(20)
 
Door
 
number
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 44  /  53  
  


 
cod_postal
 
YES
 
|
 
NULL
 
string(10)
 
Postal
 
Code
 
“0000-000”
 
localidade
 
YES
 
|
 
NULL
 
string(100)
 
City
 
regime_iva
 
YES
 
|
 
NULL
 
string
 Code  of  tax  Area  Regime  (Example:  Madeira  
=
 
PT-MA)
 
pais
 
YES
 
|
 
NULL
 
string
 
Country
 
Code
 
(Example:
 
PT)
 
CashVATScheme
 
YES
 
|
 
NULL
 
integer
 VAT  scheme  Cash:  Null  -  None  *  0  -  Inactive   
1
 
-
 
Active
 
CashVATSchemeBegin
 
YES
 
|
 
NULL
 
DATETIME
 Date/time  of  the  activation  of  the  VAT  
scheme
 
Cash
 
CashVATSchemeEnd
 
YES
 
|
 
NULL
 
DATETIME
 Date/time  of  disabling  the  VAT  scheme  Cash  
StoreSettings
 
YES
 
|
 
NULL
 
array
 
Array
 
of
 
instances
 
StoreSettings
 
 
StoreSettings  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
 
integer
 
Store
 
ID
 
idconfig
 
NO
 
|
 
 
integer
 
Config
 
ID
 
valor
 
YES
 
|
 
‘’
 
string
 
Value
 
 
Subcategory  -   v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
integer
 
ID
 
descricao
 
NO
 
|
 
 
string(50)
 
Description
 
categoria  NO  |  integer  Category  ID  
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 45  /  53  
  


 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
SubFamily  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
0
 
integer
 
ID
 
descricao
 
NO
 
|
 
NULL
 
 
string(50)
 
Description
 
família
 
NO
 
|
 
0
 
integer
 
Family
 
ID
 
fundo
 NO  |  “#808080”  
string(10)
 
Background
 
color
 
(HTML
 
color)
 
letra
 NO  |  
“#FFFFFF”
 
string(10)
 
Font
 
color
 
(HTML
 
color)
 
posicao
 
YES
 
|
 
0
 
integer
 
Position
 
within
 
the
 
Family
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Supplier  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
YES
 
|
 
 
integer
 
ID
 
nome
 
NO
 
|
 
string(50)
 
Name
 
morada
 
YES
 
|
 
NULL
 
 
string(250)
 
Address
 
codpostal
 
YES
 
|
 
NULL
 
string(4)
 
Postal
 
Code
  
“0000”
 
codpostal1
 
YES
 
|
 
NULL
 
string(14)
 
Postal
 
Code
 
“000”
 
localidade
 
YES
 
|
 
NULL
 
string(50)
 
City
 
telefone
 
YES
 
|
 
NULL
 
string(50)
 
Telephone
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 46  /  53  
  


 
fax
 
YES
 
|
 
NULL
 
string(50)
 
Fax
 
telemovel
 
YES
 
|
 
NULL
 
string(50)
 
Mobile
 
email
 
YES
 
|
 
NULL
 
string(50)
 
Email
 
web
 
YES
 
|
 
NULL
 
string(50)
 
website
 
datacriacao
 
YES
 
|
 
 
date
 
Creation
 
Date
 
contribuinte
 
YES
 
|
 
NULL
 
string(15)
 
VAT
 
Number
 
ivaincluido
 
YES
 
|
 
0
 
integer
 VAT  is  included  in  the  prices   0  -  No  *  
1
 
-
 
Yes
 
opcaopagamento
 
YES
 
|
 
0
 
integer
 
Payment
 
Option
 
ID
 
paisorigem
 
YES
 
|
 
“PT”
 
string(3)
 
Country
 
Code
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
descricao_opcaopagame
nto
 
YES
 
|
 
NULL
 
string(50)
 
Description
 
of
 
the
 
payment
 
option
 
nome_contacto  YES  |  NULL  string(100)  Name  of  contact  person  
iban  YES  |  NULL  string(45)  Supplier's  IBAN  
descfinanceiro  YES  |  0  decimal(5,2)  Discount  
 
Tablemovement  -  v2.0   -  Read  only  entity   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
data
 
NO
 
date
 
Recording
 
date
 
inicio
 
NO
 
datetime
 
Table
 
opening
 
datetime
 
fim
 
NO
 
datetime
 
Table
 
closing
 
datetime
 
pessoas
 
NO
 
integer
 
Number
 
of
 
people
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 47  /  53  
  


 
mesa
 
NO
 
integer
 
Table
 
number
 
Open
 
NO
 
|
 
0
 
integer
 
Status:
 
0
 
-
 
Open
 
*
 
1
 
-
 
Closed
 
country
 
NO
 
|
 
“PT”
 
string(10)
 
Country
 
Code
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Tax  -  v1.2   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
 
integer
 
Store
 
ID
 
codigo
 
NO
 
|
 
 
integer
 
ID
 
descricao
 
NO
 
|
 
 
string
 
Description
 
factor
 
YES
 
|
 
NULL
 
 
decimal
 
Tax
 
rate
 
factor
 
activa
 
NO
 
|
 
1
 
integer
 Status:  0  -  Inactive  
1
 
-
 
Active
 
*
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Technicalcard  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
integer
 
ID
 
empcriacao
 
NO
 
integer
 
Operator
 
ID
 
-
 
created
 
empalteracao
 
NO|
 
 
integer
 
Operator
 
ID
 
-
 
last
 
modified
 
datacriacao
 
NO
 
datetime
 
Created
 
datetime
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 48  /  53  
  


 
dataalteracao
 
NO
 
datetime
 
Modified
 
datetime
 
custo
 
YES
 
|
 
0
 
decimal(19,4)
 
Estimated
 
cost
 
for
 
production
 
tempo
 
YES
 
|
 
0
 
integer
 
Estimated
 
time
 
in
 
minutes
 
for
 
production
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
ingredients
 
YES
 
|
 
NULL
 
array
 Array  of  instances  Technicalcardingredient  
-
 
the
 
ingredients
 
preparationItems
 
YES
 
|
 
NULL
 
array
 Array  of  instances  Technicalcardpreparation  -  the  steps  for  
preparing
 
 
Technicalcardingredient  -  2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
integer
 
Product
 
ID
 
to
 
be
 
produced
 
id
 
NO
 
integer
 
Ingredient
 
position
 
in
 
ingredient
 
list
 
produto
 
NO
 
integer
 
Product
 
ID
 
used
 
as
 
an
 
ingredient
 
descricao
 
NO
 
string(50)
 
Description
 
of
 
product
 
used
 
as
 
an
 
ingredient
 
qtd
 
YES
 
|
 
0
 
decimal(19,4)
 
Quantity
 
unidade
 
YES
 
|
 
“”
 
string(50)
 
Description
 
of
 
ingredient
 
unit
 
custo
 
YES
 
|
 
0
 
decimal(19,4)
 
Cost
 
of
 
each
 
unit
 
of
 
ingredient
 
total
 
YES
 
|
 
0
 
decimal(19,4)
 
Total
 
cost
 
Comments
 
YES
 
|
 
NULL
 
string(250)
 
Comments
 
armazem
 
YES
 
|
 
0
 
integer
 
Warehouse
 
ID
 
desperdicio
 
YES
 
|
 
0
 
decimal(19,4)
 
Quantity
 
wasted
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 49  /  53  
  


 
 
Technicalcardpreparation  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
id
 
NO
 
integer
 Position  of  the  instance  in  the  list  of  steps  of  
the
 
preparation
 
of
 
a
 
technical
 
card
 
codigo
 
NO
 
integer
 
Product
 
ID
 
to
 
produce
 
produto
 
NO
 
string(255)
 
Description
 
of
 
the
 
ingredient
 
to
 
be
 
used
 
accao
 
YES
 
|
 
“”
 
string(255)
 Description  of  the  actions  to  be  taken  in  the  
preparation
 
of
 
the
 
ingredient
 
temperatura
 
YES
 
|
 
“”
 
string(50)
 
Temperature
 
to
 
use
 
tempo
 
YES
 
|
 
“”
 
string(50)
 
Ingredient
 
preparation
 
time
 
Comments
 
YES
 
|
 
“”
 
string(255)
 
Comments
 
 
Teller  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
integer
 
ID
 
descricao
 
NO
 
|
 
 
string(50)
 
Description
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Timeregister  -  v2.1  -  Read  only  entity   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
datahora
 
NO
 
 
date
 
The
 
datetime
 
instance
 
was
 
saved
 
dataval
 
NO
 
datetime
 
The
 
work
 
day
 
date
 
the
 
instance
 
refers
 
to
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 50  /  53  
  


 
diasemana
 
NO
 
 
string(10)
 
Name
 
of
 
the
 
week
 
day
 
(Portuguese)
 
empid  NO   integer  The  employee’s  ID  
empname  NO   string(50)  The  employee’s  name  
id  NO   integer  Instance’s  ID  
sentido  NO   integer  Flag  that  identifies  which  way  the  instance  refers  to:  1  -  Enter  2  -  Exit   
sentidochar  NO   string(10)  Text  representing  the  value  of  property  sentido  (in  portuguese):  “Entrada”  =>  “Enter”  “Saída”  =>  “Exit”  
lastupdate  NO   datetime  Instance's  last  update  timestamp  
 
Type  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
integer
 
ID
 
descricao
 
NO
 
|
 
“”
 
string(100)
 
Description
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
Unit  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
integer
 
ID
 
descricao
 
NO
 
|
 
“”
 
string(50)
 
Description
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 51  /  53  
  


 
 
Version  -  v2.0  -  Read  only  entity   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
integer
 
ID
 
syncv
 
NO
 
|
 
“”
 
string(100)
 
Sync
 
version
 
appv  
NO
 
|
 
“”
 
string(100)
 
App
 
version
 
db  
NO
 
|
 
“”
 
string(100)
 
Database
 
version
 
 
Warehouse  -  v2.0   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
codigo
 
NO
 
|
 
integer
 
ID
 
descricao
 
NO
 
|
 
 
string(50)
 
Description
 
lastupdate
 
YES
 
|
 
NULL
 
datetime
 
Instance's
 
last
 
update
 
timestamp
   
InfoDoc  -  v2.5   
Attribute
 
Null
 
|
 
Default
 
Tipo
 
Description
 
loja
 
NO
 
|
 
integer
 
Store
 
ID
 
numero
 
NO
 
|
 
 
integer
 
Document
 
number
 
doc
 
NO
 
|
 
 
string(2)
 
Document
 
type
 
tipo
 
NO
 
|
 
 
integer
 
Type
 
of
 
payment
 
(See
 
Table)
 
valor
 
NO
 
|
 
 
string(400)
 
document
 
information
 
value
 
chave
 
YES
 
|
 
NULL
 
string(50)
 
document
 
information
 
key
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 52  /  53  
  


 
serie
 
NO
 
|
 
‘’
 
string(20)
 
Document
 
serie
 
 
 
ZoneSoft  -  2024   www.zonesoft.pt ZSAPI  V3  -  Structure  of  Entities,  Jan  2024 53  /  53  
  
