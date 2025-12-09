# GenericIntegration.pdf

 
  
 
 
ZSROI    Generic  Integration  
                         
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 1 / 25  
  


  Introduction ......................................................................................................................... 4 Communication  and  Authentication .................................................................................... 5 Where  endpoints  need  to  be  configured ............................................................................. 6 Headers  to  send  in  request  to  API-ZSROI ........................................................................... 7 Login ................................................................................................................................... 8 Endpoint_login  (defined  in  the  integrator  platform  for  the  App) .................................... 8 Example  of  expected  response ........................................................................ 8 Menus ................................................................................................................................. 9 Json  structure  of  the  Menus ......................................................................................... 9 Structure  of  the  array  families .................................................................................... 10 Structure  of  the  array  subfamilies ............................................................................... 10 Structure  of  the  array  products ................................................................................... 10 Structure  of  the  array  attributes .................................................................................. 11 Structure  of  the  attribute_groups  array ....................................................................... 11 Endpoint_menu  (defined  in  the  integrator  platform  for  the  App) ................................ 12 In  the  file  ‘menu_example’  is  an  example  of  a  menu  structure  for  your  synchronisation,  which  will  be  sent  to  the  menu  endpoint. ............................. 12 Example  of  a  successful  expected  response  (statusCode  204) ..................... 12 Example  of  response  with  error  (statusCode  400) ......................................... 12 Sync  Menu  via  ZSROI ................................................................................................ 13 Orders .............................................................................................................................. 15 Structure  of  the  Orders  object .................................................................................... 15 In  the  file  'order_example'  is  an  example  of  an  order  that  the  Zone  Soft  API  expects  to  receive. .......................................................................................... 19 Endpoint  that  should  be  used  for  sending  orders: .......................................... 19 Example  of  how  the  request  should  be  signed: .............................................. 19 Example  of  the  response  of  the  Zone  Soft  API  on  receiving  the  order  if  it  is  saved  successfully .......................................................................................... 20 Example  of  Zone  Soft  API  response  when  the  order  is  received  and  there  is  no  menu  on  the  Zone  Soft  side,  with  the  same  ids  as  the  order. .................... 20 Example  of  response  from  the  Zone  Soft  API  when  order  is  received  and  the  POS  is  not  connected ..................................................................................... 20 Example  of  the  response  from  the  Zone  Soft  API  when  the  order  is  received  and  the  integration  is  not  active ...................................................................... 21 Example  of  response  from  the  Zone  Soft  API  when  the  order  is  received  and  the  structure  is  not  as  expected ...................................................................... 21 Endpoint_order_status  (defined  in  the  integrator  platform  for  the  App) ..................... 22 ZSROI  will  send  status  updates  of  orders  received  to  this  endpoint:  1  request  per  order. ........................................................................................................ 22  
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 2 / 25  
  


 Supported  states:   ‘accept’,  ‘decline’,  ‘ready’,  ‘delivered’,  ‘remind’. ................ 22 Example  of  a  successful  response  (statusCode  204) .................................... 22 Example  of  response  with  error  (statusCode  404) ......................................... 22 Endpoint_pos_status .................................................................................................. 23 POS  data  -  Get  POS  status .................................................................................. 23 Example  of  a  successful  response  (statusCode  200) .................................... 23 POS  online  -  Putting  the  POS  online  to  receive  orders ........................................ 23 Example  of  a  successful  response  (statusCode  204) .................................... 23 POS  offline  -  Put  the  POS  offline  to  not  receive  orders. ....................................... 24 Example  of  a  successful  response  (statusCode  204) .................................... 24 Table  Reservation ............................................................................................................. 25 Table  reservation  functionality  in  ZSROI  generated  in  the  integrated  App  and  forwarding  them  to  the  POS. ...................................................................................... 25 Get  Tables ........................................................................................................................ 26                           
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 3 / 25  
  


 
Introduction  
 This  document  is  intended  for  Zone  Soft  partners  who  want  to  integrate  their  services  using  
ZSROI
 
to
 
send
 
orders
 
directly
 
to
 
the
 
POS.
 This  document  aims  to  define  the  communication,  authentication,  menu  structure  and  order  
structure
 
in
 
Zone
 
Soft
 
integration.
 It  aims  to  define  endpoints  that  integrators  should  use,  the  structure  and  types  of  response  
expected
 
from
 
each,
 
as
 
well
 
as
 
the
 
endpoints
 
that
 
integrators
 
should
 
implement,
 
the
 
structure
 
and
 
their
 
responses.
    
 
 
 
 
 
           
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 4 / 25  
  


 
Communication  and  Authentication  
 First  of  all  you  need  to  register  a  user  in  https://developer.zonesoft.org  and  create  a  ‘New  
Integration’
 
(please
 
see
 
“Platform
 
Manual”
 
document).
 Communication  with  the  integrator  will  be  via  endpoints  defined  when  creating  a  new  
integration.
  Below  is  an  example  of  the  structure  of  a  generic  integration  {      "app_key":  “YOUR-KEY",      "app_secret":  "YOUR-APP-SECRET",       "app_name":  "YOUR-APP-NAME",      "endpoints":  {      "endpoint_login":  "https://example.com/auth/login",      "endpoint_menu":  "https://example.com/sync/menu",      "endpoint_order_status":  "https://example.com/order/status",      "endpoint_pos_status":  "https://example.com/pos/status/"  }  }   endpoint_login  -  It’s  for  API-ZSROI  authenticate  in  Integrator’s  app  with  integrator  
APP-
 
KEY
 
and
 
APP-SECRET
 
(will
 
be
 
generated
 
when
 
you
 
create
 
a
 
‘New
 
Integration’
 in  https://developer.zonesoft.org/login) that  should  return  a  token.  The  token  will  be  sent  in  headers  to  the  others  endpoints  (see  section  Login).   endpoint_menu  -  This  endpoint  is  for  sending  the  menu  (see  section  Menus).   endpoint_order_status  -  This  endpoint  is  for  send  the  Orders  Status  (see  section  
Endpoint_order_status)
  endpoint_pos_satus  -  This  endpoint  is  for  send  information  about  POS  status  (see  section  
Endpoint_pos_status)
   ZoneSoft's  integrator  is  responsible  for  creating  the  necessary  endpoints  
to
 
enable
 
communication
 
between
 
their
 
application
 
and
 
ZoneSoft.
 
While
 
the
 
provided
 
endpoints
 
serve
 
as
 
an
 
example,
 
the
 
integrator
 
must
 
implement
 
their
 
specific
 
endpoints
.
  
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 5 / 25  
  


 
Where  endpoints  need  to  be  configured   After  creating  a  ‘New  Integration’  in  https://developer.zonesoft.org  you  need  to  create  
a
 
new
 
client
 
and
 
set
 
all
 
endpoints
 
to
 
finalize
 
the
 
integration
 
with
 
API-ZSROI.
 
 
 If  you  don’t  have  a  Client  Serial  you  should  to  contact  our  comercial  department  
(comercial@zonesoft.org)
  
 
 
 
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 6 / 25  
  


 
Headers  to  send  in  request  to  API-ZSROI   You  need  to  add  this  information  in  the  request  to  communicate  with  API-ZSROI  
when:
 
Send
 
a
 
order
 
-
 
(see
 
section
 
Orders)
 Get  Tables  -  (see  section  Get  Tables)  Reservation  table  -  (see  section  Reservation  
table)
 
Please
 
see
 
the
 
example
 
files
 
and
 
the
 
postman
 
collection.
  Authorization  header  you  must  send  your  APP-KEY  found  on  the  portal:  
https://developer.zonesoft.org/login
  X-Integration-Signature  header  you  must  send  the  request  signature  with  your  
APP-
 
SECRET
 
that
 
can
 
also
 
be
 
found
 
on
 
the
 
portal.
  Signature:  
 payload  -  request  body  app_secret  -  your  APP-SECRET  found  on  the  portal:  https://developer.zonesoft.org/login  
 
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 7 / 25  
  


 
Login  
For  ZSROI  to  synchronise  the  menu  with  the  integrated  App  or  access  any  other  
functionality
 
provided
 
by
 
the
 
integrated
 
App,
 
an
 
authentication
 
token
 
must
 
be
 
obtained..
  ZSROI  will  obtain  that  token  through  an  authentication  request  to  the  endpoint  defined  for  
the
 
App
 
when
 
it
 
was
 
registered
 
on
 
Zone
 
Soft's
 
integrator
 
platform.
  Example  endpoint:  https://example.com/auth/login   The  token  obtained  will  be  sent  in  the  header  of  each  request  to  access  the  integrated  App.  The  App  must  validate  the  token  received.  
Endpoint_login  (defined  in  the  integrator  platform  for  the  App)  
curl--location--request  POST  'https://example.com/auth/login  \  --data-raw  '  {        “app_store_username”:  “YOUR_APP_KEY”,       “app_store_secret”:  “YOUR_APP_SECRET”      }’  
Example  of  expected  response  
{      "body":  {        "access_token":  "TOKEN",        "expires_in":  2592000      },      "header":  {        "statusCode":  200,        "statusMessage":  "OK",        "status":  "HTTP/1.1  200  OK"      }      }  
        
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 8 / 25  
  


 
Menus  
Menus  will  have  the  functionality  to  set  menu  products  in  the  integrated  App,  as  well  as  shop  
hours
 
and
 
status.
 
Create,
 
update
 
menus
 
and
 
set
 
shop
 
as
 
online
 
or
 
offline
 
in
 
the
 
integrated
 
App.
 Menus  will  be  built  by  the  client/restaurant  in  ZSBMS,  being  necessary  to  activate  the  
products
 
to
 
be
 
available
 
in
 
the
 
integration
 
or
 
using
 
digital
 
menus,
 
assigning
 
a
 
specific
 
menu
 
to
 
the
 
integration.
  
 
Json  structure  of  the  Menus   -  families  (array)  A  family  is  the  main  category  of  a  menu.  It  is  mandatory  to  have  at  least  one  family  on  the  
menu.
 
Examples
 
of
 
families:
 
Drinks,
 
Burgers,
 
Salads,
 
Desserts,
 
Pasta.
 In  Zone  Soft  represents  the  table  of  familias .   -  subfamilies  (array)  A  subfamily  is  a  subdivision  within  families.  They  are  not  compulsory.  Examples  of  
sub-families:
 
Soft
 
drinks
 
(family:
 
Beverages),
 
Carbonara
 
(family:
 
Pasta).
 In  Zone  Soft  represents  the  table  of  subfamílias .   -  products  (array)  A  product  is  the  main  component  of  a  menu.  Each  product  belongs  to  a  family  and/or  family  
+
 
sub-family.
 Zone  Soft  represents  the  table  of  produtos .   -  attributes  (array)  A  product  can  be  personalized  in  different  ways.  For  example,  adding  a  drink  or  adding  an  
extra
 
ingredient.
 
Each
 
of
 
these
 
customisations
 
is
 
considered
 
as
 
an
 
attribute.
 
It
 
is
 
not
 
mandatory
 
for
 
a
 
product
 
to
 
have
 
attributes.
 
Each
 
attribute
 
can
 
have
 
a
 
different
 
price
 
impact.
 
Attributes
 
from
 
the
 
same
 
menu
 
are
 
grouped
 
into
 
attribute
 
groups.
 In  Zone  Soft  represents  the  table  of  niveismenu .   -  attribute_groups  (array)  Attribute  groups  allow  you  to  group  similar  customisations  into  generic  groups.  Each  attribute  
group
 
can
 
have
 
a
 
minimum
 
number
 
and
 
maximum
 
number
 
of
 
choices
 
allowed
 
to
 
the
 
client.
  Examples  of  attribute  groups:  -  Side  dish:  rice  and/or  potatoes  -  Drinks:  water,  coca-cola  In  Zone  Soft  represents  the  table  of  niveismenuext  and  complementares .  
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 9 / 25  
  


 
Structure  of  the  array  families 
Field  name  Description  
name  (string)  Family  name  
subfamilies  (array)  List  of  sub-families   
Structure  of  the  array  subfamilies 
Field  name  Description  
name  (string)  Name  of  the  subfamily  
products  (array)  List  of  product  id  of  the  sub-family   
Structure  of  the  array  products 
Field  name  Description  
id  (string)  Product  ID  
name  (string)  Product  name  
price  (int)  Price  of  the  product  in  cents  with  VAT  
tax_rate  (string)  Product  VAT  
imagem_url  (string)  Image  url  of  the  product  
is_alcohol  (integer)  Alcoholic  product  with  value  1,  value  0  non-alcoholic  
description  (string)  Product  description  
attributes_groups  (array)  List  of  attribute  groups  ids  
availability  (string)  The  days  and  times  of  day  when  this  menu  is  available.  
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 10 / 25  
  


 
 
Structure  of  the  array  attributes 
Field  name  Description  
id  (string)  Attribute  ID  
name  (string)  Attribute  name  
selected_by_default  (boolean)  Selected  by  default  
price_impact  (string)  Price  of  the  attribute  in  cents  with  vat  
tax_rate  (string)  Iva  of  the  attribute  
attribute_groups  (array)  Array  of  attribute  groups  ids  
Structure  of  the  attribute_groups  array 
Field  name  Description  
id  (string)  Attribute  group  ID  
name  (string)  Name  of  the  attribute  group  
min  (integer)  Minimum  number  of  attribute  groups  that  can  be  chosen  
max  (integer)  Maximum  number  of  attribute  groups  that  can  be  chosen  
attributes  (array)  Array  of  attribute  ids   
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 11 / 25  
  


 
 
Endpoint_menu  (defined  in  the  integrator  platform  for  the  App)  
In  the  file  ‘menu_example’  is  an  example  of  a  menu  structure  for  your  synchronisation,  which  
will
 
be
 
sent
 
to
 
the
 
menu
 
endpoint.
 
Example  of  a  successful  expected  response  (statusCode  204)  
{      "body":  "",      "header":  {        "statusCode":  204,        "statusMessage":  "No  Content",        "status":  "HTTP/1.1  204  No  Content"     }      }  
Example  of  response  with  error  (statusCode  400)  
{      "body":  {       "error":  "Field  validation  for  ‘families’  failed  on  the  'required'  tag"      },      "header":  {        "statusCode":  400,        "statusMessage":  "Bad  Request",        "status":  "HTTP/1.1  400  Bad  Request"     }  }  
 
 
 
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 12 / 25  
  


 
Sync  Menu  via  ZSROI  
This  endpoint  allows  you  to  synchronize  the  menu  with  ZSROI  via  an  HTTP  request.  
The
 
synchronization
 
process
 
is
 
asynchronous.
 
Once
 
it
 
completes,
 
a
 
final
 
status
 
notification
 
will
 
be
 
sent
 
to
 
BMS.
 
Please  note  that  there  is  a  daily  request  limit.  If  this  limit  is  reached,  a  specific  error  message  
will
 
be
 
returned.
 
 
Structure
 
of
 
the
 
sync
 
menu
 
object
 
Field  name  Description  
client_id  Client_id  available  on  the  portal  https://developer.zonesoft.org 
store  Store  ID   Example  request  curl  --location  'https://zsroi.zonesoft.org/v1.0/integration/syncMenu'  \  --header  'Content-Type:  application/json'  \  --header  'X-Integration-Signature:  Signature'  \  --header  'Authorization:  YOUR_APP_KEY'  \  --data  '{      "client_id":  "A73FEE38076757E",      "store":  5  }' 
 
 
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 13 / 25  
  


 Example  of  a  successful  response  (statusCode  201)  {      "body":  {               "Response":  {                     "StatusCode":  201,                     "StatusMessage":  "Created",                     "Content":  null     }    },      "header":  {        "statusCode":  204,        "statusMessage":  "No  Content",        "status":  "HTTP/1.1  204  No  Content"     }      }  
 Example  of  response  with  error  (statusCode  422)  {      "body":  {             "Response":  {                     "StatusCode":  422,                     "StatusMessage":  "Unprocessable  Entity",                     "Content":  [                             {                                "property":  "client_id",                                "error":  "Max  sync  per  day  (5)  reached"                             }                           ]                      }                  }       },      "header":  {        "statusCode":  422,        "statusMessage":  "Unprocessable  Entity",        "status":  "HTTP/1.1  422  Unprocessable  Entity"     }  }     
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 14 / 25  
  


 Example  of  response  with  error  (statusCode  400)  {     "body":{      "Response":  {         "StatusCode":  400,         "StatusMessage":  "Bad  Request",         "Content":  null      }     }      "header":  {        "statusCode":  400,        "statusMessage":  "Bad  Request",        "status":  "HTTP/1.1  400  Bad  Request"     }  }  
 Example  of  response  with  error  (statusCode  401)  {     "body":{       "Response":  {         "StatusCode":  401,         "StatusMessage":  "Unauthorized",         "Content":  null       }     }      "header":  {        "statusCode":  401,        "statusMessage":  "Unauthorized",        "status":  "HTTP/1.1  401  Unauthorized"     }  }  
 
 
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 15 / 25  
  


 
Orders  
 Orders  is  the  ZSROI  functionality  that  handles  orders  generated  in  the  integrated  App  and  
then
 
routes
 
them
 
to
 
the
 
POS.
 
Structure  of  the  Orders  object  
Field  name  Description  
order_id  (string)  Order  ID  
store_id  (string)  Your  ‘client_id’  available  at  https://developer.zonesoft.org  
type_order  (string)  Type  of  order   -Allowed  values:  ●  DELIVERY  ●  PICKUP  
order_time  (string  datetime)  Date  and  time  the  order  was  accepted  by  the  integrating  entity  in  the  format:  yyyy-MM-dd  HH:mm:ss  
estimated_pickup_time  (string  datetime)  Estimated  date  and  time  the  courier  will  arrive  in  the  format  yyyy-MM-dd  HH:mm:ss  
currency  (string)  Currency  code  (EUR)  
allergy_info  (string)  (optional)  Customer  allergy  information  
delivery_fee(int)  (optional)  Delivery  price  in  cents  
estimated_total_price  (int)  (optional)  Estimated  total  price  of  products  and  attributes  of  the  order  in  cents  with  VAT.  The  delivery  tax  is  not  included  
courier  (object)  (optional)  Object  containing  information  about  the  courier.  
customer  (object)  (optional)  Object  that  contains  customer  information  
products  (array)  Array  containing  the  products  of  the  order.  One  product  per  object  
obs  (string)  (optional)  Observations  /  Notes  
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 16 / 25  
  


 orderIsAlreadyPaid  (boolean)  Information  if  the  order  has  already  been  paid  for  
payment_type  (Integer)  (optional)  Payment  type  Allowed  values:  ●  1  -  Money  ●  2  -  Banker's  Cheque  ●  3  -  Debit  card  ●  4  -  Credit  card  ●  9  -  Multiple  Payments  (from  version  2024.0.1.21  of  ZSRest)  ●  28  -  Uber  Eats  ●  36  -  Glovo  ●  39  -  Bolt  Food  ●  41  -  Flipdish  
delivery_address  (object)  Delivery  address  information  
is_picked_up_by_customer  (boolean)  Boolean  to  indicate  if  the  order  will  be  picked  up  by  a  customer  
discounted_products_total  (Integer)  Total  discount  of  the  products  -  the  sum  of  the  'discount'  field  of  each  product  which  should  take  into  account  the  field  ‘attributes[].discount’  
total_customer_to_pay  (int)  Total  amount  to  be  paid  in  cents  by  the  customer  
channel_name  (string)  (optional)  Name  of  the  origin  order  supplier.  Must  use  the  following:  #INTEGRATOR#PROVIDER.  Example:  #ZONESOFT#UBER_EATS  
payment_charges  (object)  (optional)  Object  with  the  various  charges  that  make  up  the  payment  for  an  order  
pick_up_code  (string)  (optional)  Pick  up  code  the  courier  uses  to  identify  order  pick  up  
Courier  (object)  Field  name  Description  
name  (string)  Name  of  courier  
phone_number  (string)  Phone  number  of  courier  
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 17 / 25  
  


 license_plate  (string)  Registration  of  the  courier  
 
Customer  (object)  Field  name  Description  
name  (string)  Client's  name  
phone  (string)  Customer  phone  number  
nif  (string)  NIF  
email  (string)  Client’s  email   Produts(array)  Field  name  Description  
id  (string)  Product  id  
quantity  (integer)  Order  product  quantity  
name  (string)  Product  name  
price  (int)  Price  of  the  product  in  cents  with  VAT  
discount  (int)  Product  discount  in  cents  
obs  (string)  (optional)  Product  observations  
attributes  (array)  Array  containing  the  product  attributes  
Delivery_address(object)  Field  name  Description  
label  (string)  Address  
latitude  (string)  Latitude  coordinate  
longitude  (string)  Longitude  coordinate   Attributes(array)  Field  name  Description  
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 18 / 25  
  


 Id  (string)  Attribute  ID  
quantity  (integer)  Quantity  of  the  order  attribute  
name  (string)  Attribute  name  
price  (int)  Price  of  the  attribute  in  cents  with  vat  
discount  (int)  Product  discount  in  cents   Payment_charges(object)  Field  name  Description  
total  (int)  Total  cost  of  the  order,  including  taxes  and  fees  in  cents  
sub_total  (int)  Total  cost  of  each  product  in  cents  without  taxes  
tax  (int)  Total  cost  of  fees  in  cents  
total_fee  (int)  Total  fees  charged  on  the  order  that  will  be  paid  to  the  Merchant  
total_fee_tax  (int)  The  total  tax  charged  on  the  total  rate  in  cents  
bag_fee  (int)  The  fee  charged  to  provide  a  bag(s)  for  the  order  in  cents  
delivery_fee  (int)  The  fee  charged  to  deliver  the  package  in  cents  
delivery_fee_tax  (int)  Tax  charged  on  delivery  fee  in  cents  
small_order_fee  (int)  The  fee  charged  for  low-value  orders  in  cents  
small_order_fee_tax  (int)  Tax  charged  for  low-value  parcels  in  cents  
pick_and_pack_fee  (int)  Fee  charged  for  the  collection  of  parcels  in  cents  
pick_and_pack_fee_tax  (int)  Package  collection  tax  in  cents  
tip  (int)  Total  tips  in  cents  
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 19 / 25  
  


 In  the  file  'order_example'  is  an  example  of  an  order  that  the  Zone  Soft  API  expects  to  
receive. 
Endpoint  that  should  be  used  for  sending  orders:  ●  https://zsroi.zonesoft.org/v1.0/integration/order   Note :  In  the  'Authorization'  header  you  must  send  your  APP-KEY  found  on  the  portal:  https://developer.zonesoft.org/login  In  the  'X-Integration-Signature'  header  you  must  send  the  request  signature  with  your  
APP-SECRET
 
that
 
can
 
also
 
be
 
found
 
on
 
the
 
portal.
 
Example  of  how  the  request  should  be  signed: 
hash_hmac('SHA256',  $payload,  $app_secret);  
Example  of  the  response  of  the  Zone  Soft  API  on  receiving  the  order  if  it  is  saved  
successfully
 
{      "Response":  {          "StatusCode":  201,          "StatusMessage":  "Created",          "Content":  null      }  }   
Example  of  Zone  Soft  API  response  when  the  order  is  received  and  there  is  no  menu  on  the  
Zone
 
Soft
 
side,
 
with
 
the
 
same
 
ids
 
as
 
the
 
order. 
{      "Response":  {          "StatusCode":  422,          "StatusMessage":  "Unprocessable  Entity",          "Content":  "order_rejected_pos_menu_not_found"      }  }  
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 20 / 25  
  


  
Example  of  response  from  the  Zone  Soft  API  when  order  is  received  and  the  POS  is  not  
connected
 
{      "Response":  {          "StatusCode":  422,          "StatusMessage":  "Unprocessable  Entity",          "Content":  "order_rejected_pos_ping_failed"      }  }  
 
Example  of  the  response  from  the  Zone  Soft  API  when  the  order  is  received  and  the  
integration
 
is
 
not
 
active
 
{      "Response":  {          "StatusCode":  422,          "StatusMessage":  "Unprocessable  Entity",          "Content":  "order_rejected_pos_missing_integration_service"      }  }   
Example  of  response  from  the  Zone  Soft  API  when  the  order  is  received  and  the  structure  is  
not
 
as
 
expected
 
{      "Response":  {          "StatusCode":  400,          "StatusMessage":  "Bad  Request",          "Content":  null      }  }  
 
 
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 21 / 25  
  


 
Endpoint_order_status  (defined  in  the  integrator  platform  for  the  App)  ZSROI  will  send  status  updates  of  orders  received  to  this  endpoint:  1  request  per  order.  
Supported  states:   ‘accept’,  ‘decline’,  ‘ready’,  ‘delivered’,  ‘remind’.  
curl  --location  --request  POST  'https://example.com/order/status  \  --header  'Content-Type:  application/json'  \  --header  'Authorization:  TOKEN'  \  --data-raw  '{      "order_id":  "123123",      "status":  "accept"  }'  
Example  of  a  successful  response  (statusCode  204)  
{      "body":  "",      "header":  {        "statusCode":  204,        "statusMessage":  "No  Content",        "status":  "HTTP/1.1  204  No  Content"     }      }  
Example  of  response  with  error  (statusCode  404)  
{      "body":  {        "code":  "resource_not_found",        "message":  "Order  not  found"     },      "header":  {        "statusCode":  404,        "statusMessage":  "Not  Found",        "status":  "HTTP/1.1  404  Not  Found"     }  }  
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 22 / 25  
  


 
Endpoint_pos_status  The  POS  endpoints  have  the  functionality  to  get  information  from  the  POS,  to  put  the  POS  
online
 
or
 
offline.
 Note :  The  suffix  ‘closing’  is  added  to  endpoint_pos_status  for  PUT  and  DELETE  requests.  
POS  data  -  Get  POS  status  
curl  --location  --request  GET  'https://example.com/pos/status  \  --header  'Content-Type:  application/json'  \  --header  'Authorization:  TOKEN'  \  --data-raw  ''  
Example  of  a  successful  response  (statusCode  200)  
{      "body":  "",      "header":  {        "statusCode":  200,        "statusMessage":  "OK",        "status":  "HTTP/1.1  200  OK"     }      }  
POS  online  -  Putting  the  POS  online  to  receive  orders  
curl  --location  --request  DELETE  'https://example.com/pos/status/closing'  \  --header  'Content-Type:  application/json'  \  --header  'Authorization:  TOKEN'  \  --data-raw  ''   
Example  of  a  successful  response  (statusCode  204)  
{      "body":  "",      "header":  {        "statusCode":  204,        "statusMessage":  "No  Content",        "status":  "HTTP/1.1  204  No  Content"     }  
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 23 / 25  
  


 }  
POS  offline  -  Put  the  POS  offline  to  not  receive  orders.  
curl  --location  --request  PUT  'https://example.com/pos/status/closing'  \  --header  'Content-Type:  application/json'  \  --header  'Authorization:  TOKEN'  \  --data-raw  ''  
Example  of  a  successful  response  (statusCode  204)  
{      "body":  "",      "header":  {        "statusCode":  204,        "statusMessage":  "No  Content",        "status":  "HTTP/1.1  204  No  Content"     }  }  
 
 
 
 
 
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 24 / 25  
  


 
Table  Reservation  
To  make  a  table  reservation,  you  must  follow  the  authentication  process  detailed  in  the  
"Login"
 
section.
 
Further
 
details
 
on
 
reservations
 
are
 
available
 
in
 
the
 
linked
 
document:
 https://cdn1.zonesoft.org/docs/zsroi/v1/TablesReservations_API.pdf 
Get  Tables  
Functionality  to  get  the  information  from  the  tables  to  the  serial  and  store   
exemplo:
 curl  --location  'https://zsroi.zonesoft.org/v1.0/integration/tables/base_encode(seria+loja)'  \  --header  'X-Integration-Signature:  Signature'  \  --header  'Authorization:  YOUR_APP_KEY'  \  --data  ''   
 
Zone  Soft -  2020  www.zonesoft.pt  ZSROI  -  Generic  Integration,  December  2020 25 / 25  
  
