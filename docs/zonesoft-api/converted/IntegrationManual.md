# IntegrationManual.pdf

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 1/214
ZSAPI
Integration Manual
API Version: 3
Database Version: >=2024
Document´s Review: 1.0
On: Jan, 2024

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 2/214
Changes
Introduction
About the Zone Soft API - ZSAPI
Legal Note
Terms Used in This Document
Nomenclatures
Requests
Responses
Responses - Listings
Communication Guide for support requests to api@zonesoft.org
Conventions for Data Types
Access
Interfaces ZSAPI
Interface::Breaks
Action::getInstances
Interface::Cancellations
Action::getInstances
Interface::Cards
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Action::setFullSync
Interface::Cardsseries
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Interface::Cashflowmotives
Action::getInstance
Action::getInstances
Action::getInstancesToSync
Interface::Cashoutflows

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 3/214
Action::getInstances
Interface::Categories
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Action::setFullSync
Interface::Characteristics
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Interface::Clients
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Action::setFullSync
Action::setInstancesAsInactive
Interface::Couverts
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Interface::Discounttickets
Action::getInstance
Action::getInstances
Interface::Documents
Action::getCounterBalancesInstancesFromDocument
Action::getDocumentsHeaders
Action::getInstance

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 4/214
Action::getInstances
Action::getPaymentDocInstancesFromDocument
Action::saveATCode
Action::saveATTransportInstance
Action::saveInstances
Action::setInstanceAsNulled
Interface::Exemptionreasons
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Action::setFullSync
Interface::Families
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Action::setFullSync
Interface::Groups
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Interface::Happyhours
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Interface::Invoicedocuments
Action::getInstance
Action::getInstances
Action::saveInstance

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 5/214
Action::setInstanceAsNulled
Interface::Movements
Action::getInstance
Action::getInstances
Action::getInstancesToSync
Interface::Numdocseries
Action::getInstances
Action::saveInstances
Interface::Operators
Action::deleteInstances
Action::getActiveInstances
Action::getInactiveInstances
Action::getInstance
Action::getInstances
Action::getInstancesToSync
Action::saveInstances
Action::setFullSync
Interface::Options
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Interface::Paymentoptions
Action::getInstance
Action::getInstances
Interface::Paymenttypes
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Action::setFullSync
Interface::Productioncentres
Action::deleteInstances
Action::getInstance
Action::getInstances

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 6/214
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Interface::Products
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::getNextCodigo
Action::saveInstances
Action::setFullSync
Interface::Productstocks
Action::getCurrentStockInstances
Action::getCurrentStockInstancesByBarcode
Action::getCurrentStockInStores
Action::getStockInstanceByDate
Interface::Productstocksmovements
Action::getInstances
Interface::Properties
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Action::setFullSync
Interface::Reasonbreaks
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Action::setFullSync
Interface::Sales
Action::getInstance
Action::getInstancesFromDocument
Interface::Salesday
Action::getInstance

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 7/214
Action::getInstances
Action::saveInstances
Interface::Salessessions
Action::closeSaleSession
Action::getInstance
Action::getOpenSaleSessionInstance
Action::saveInstances
Interface::Salesstations
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::getInstancesWithSettings
Action::getInstanceWithSettings
Action::saveInstances
Interface::Saleszones
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Interface::Signeddocumentscounts
Action::getInstance
Interface::Stores
Action::getInstance
Action::getInstances
Action::getInstanceWithSettings
Action::saveInstances
Interface::Subcategories
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Interface::Subfamilies
Action::deleteInstances
Action::getInstance

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 8/214
Action::getInstances
Action::getInstancesFromFamily
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Action::setFullSync
Interface::Suppliers
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Interface::Tablemovements
Action::getInstances
Action::getTableDetails
Interface::Taxes
Action::deleteInstances
Action::getActiveInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Action::setFullSync
Action::setInstancesAsInactive
Interface::Technicalcards
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Interface::Tellers
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 9/214
Action::saveInstances
Interface::Timeregisters
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Interface::Types
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Interface::Units
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Action::setFullSync
Interface::Versions
Action::getInstance
Interface::Warehouses
Action::deleteInstances
Action::getInstance
Action::getInstances
Action::getInstancesToDelete
Action::getInstancesToSync
Action::saveInstances
Interface::Workingdocuments
Action::getInstance
Action::getInstances
Action::saveInstance
Action::setInstanceAsNulled
Interface::Transferdocuments
Action::saveInstance
Action::cancelInstance
Interface::Transportdocuments

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 10/214
Action::saveInstance

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 11/214
Changes
To improve this document readability we removed reference to Interfaces and Actions 
that were replaced by new ones when v2 was released - we will keep the last revision 
of the v2 documentation available but will not be getting any updates.
Change log for V2.0 and above was moved to an independent document entitled:
ChangeLog-ZSAPI-v2.5-Rev1.0
Introduction
This document is intended to describe the procedures and requirements necessary to
use the Zone Soft API - ZSAPI.
This document is intended for our customers who wish to develop solutions that allow
integrating other services with our services using the various operations provided by our
API.
About the Zone Soft API - ZSAPI
● ZSAPI provides a set of features that applications and services external to the
Zone Soft ecosystem can use to interact with our applications and services.
● ZSAPI does not implement any of the business logic used by our applications.
However, it must be borne in mind that the features available are developed and
guided by the way our applications and services work and their needs. 
● Applications that interact with the API are solely responsible for the control and
management of the data they use and should always be developed taking into
account that their actions will affect all other applications that use the same
database.
● ZSAPI implements validations for data integrity and legal issues that may not be
published in this documentation.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 12/214
● In case of doubts or difficulties in integration, you can contact us exclusively by
email api@zonesoft.org and you must take into account the Communication
Guide for support requests to api@zonesoft.org (defined in this document). There
is the possibility, through the email api@zonesoft.org, of being scheduled on time
and through the availability of our services, conference calls or calls via hangouts
to clarify doubts.
Legal Note
The User may not use the API without a record. User registration is required for use of
all features.
Zone Soft will deal with the data provided by the User for the purpose of improving his
service, future contact and presentation of proposals or services. This data is for the
exclusive use of Zone Soft and will not be transmitted to third parties without your
consent. Pursuant to Law no. 67/98 of 26 October, the right to access, rectify and delete
the above personal data is guaranteed. Non-personal information collected by Zone Soft
through our API, or by other means, can be used for statistical purposes, with the identity
of Users always protected. If you do not want to authorize the processing of your personal
data or want to make its change or deletion, you should send an e-mail to
api@zonesoft.org.
CHANGES TO THIS PRIVACY POLICY
Zone Soft may, from time to time, make changes to the Privacy Policy and these are
always communicated to Registered Users. Users will be aware of any changes that
Zone Soft may introduce via email or at the zonesoft.pt site.
Terms Used in This Document
Request - The request http itself. Used in this document as an entity (object).
URL - The address URL used in the Request  - which is part of the Request.
Response - The response to the request http returned by the API. Used in this document
as an entity (object).

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 13/214
StatusCode - Element Response, contains the id of the Response’s status.
 
StatusMessage - Element Response,contains the text message for the returned
Response’s status code.
Content - Element Response, contains information requested in the Request. 
POST -  A request http using the method POST from the protocol http.
Assuming the JSON Request:
{
    "document":{
                         "id":0
                       }
}
The elements document are examples of Request Root Element; id is not Root Element.
Nomenclatures
delete - If an action that gives a command to erase something, you should always have
at beginning of the name. delete Ex: deleteInstances.
save -  If it is an action that writes information in database, it should always contain in
the beginning  save. Ex. saveInstances.
get -  If it is an action to read information to client, it should always contain at start  get.
Ex. getInstances.
Requests

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 14/214
Service address (since December 2014):
https://api.zonesoft.org
 
The ZSAPI expects the following structure URL in each Request  regardless of the type
of client accessing
https://api.zonesoft.org/vVersion_number/interface_name/action_name
such as:
https://api.zonesoft.org/v3/documents/getInstances
where:
1. https://api.zonesoft.org/ -  server address
2. v3/  -  the version of ZSAPI intended to use - v must be lower case
3. documents/ -  Interface that will process the Request
4. getInstances - the name of the Action within the Interface that will process the
Request.
Only POST Requests are supported. 
Any other type of Request originates Response StatusCode:: ZSAPI_BAD_REQUEST
400. 
Only the following HTTP CONTENT_TYPE header is supported:
● application/json; charset = utf-8 
It is mandatory to indicate the API version for each request through URL the Request
and this should be the first parameter, just after the address https of the service - v must
be lower case.
Example:
curl -k https://api.zonesoft.org/v3/products/getInstance
Note: The API version definition should be the first item just after the http service address as in
the example above: https: //api.zonesoft.org/v3/ - Failure to comply with this rule may result
in a response different than expected; v must be lower case.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 15/214
Caution: If the version is not defined in the Request, the Response may be different from
what is expected.
Responses
Supported formats: 
● JSON 
 
In an ideal approach, the Client should convert Response to an object whose properties
are StatusCode, StatusMessage and the Content object.
The client must analyze the Response.SatusCode before processing the
Response.Content.
Example 5 (pseudo-code):
if(Response.StatusCode === 400){
(an error occurred while processing the request)
}else{
(all okay, it can handle Response.Content - but it is advisable to check the value of
Response.Status before processing Response.Content)
}
Responses - Listings
All Requests that originate listings as Answers are limited by default to a maximum of
250 instances of entity requested/returned. This limit can be changed in the Request
itself for any value between [1, 250].
Whenever a Request  is made to obtain a list of instances, the list of instances will be
provided inside the object Response.Content  what will have a property with the
lowercase singular name of the requested Interface. This property will be an Array that
will contain the requested instances - There are however some exceptions properly
identified.
All arguments presented in the table below may be defined for each Request for an
Interface. To do this, they must be encapsulated in an entity with the lowercase and
singular name of the ZSAPI Interface that will process the request.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 16/214
Note: In Requests that originate listings it is mandatory to have a root element with the lowercase
name of the model_entity containing an instance  is mandatory (even if empty) of the
model_entity - unless otherwise noted.
Arguments available for Request listing:
Argument Required Type Defeito Description
model_entity YES object Instance of model_entity
model_entity [limit] NO integer 250 Number of records to
obtain.
model_entity [offset] NO integer 0 Number of records from
which to get the listing. 
model_entity [order] NO string ‘’’ Order of listing,
must comply with the
following standard:
property_name[,property
_name1,property_name
2]   order
Order can be one of the
following: ASC, DESC.
model_entity [group] NO string ‘’ Properties to group.
model_entity [condition] NO string ‘’ Extra search criteria.
Example of a Curl Request to the Interface documents - Entity to use document :
curl -k https://api.zonesoft.org/v3/documents/getInstances/ -H 'Content-type: application/json' -X POST
-d '{”document”:{"limit":100,”offset”:150}}'
Note: the combination of arguments limit and offset allows navigation between applications
listings to the same interface, like the queries SQL.
Responses  status: ZSAPI_UNPROCESSABLE_ENTITY (422)
Whenever a Request is made that returns a response with the status
ZSAPI_UNPROCESSABLE_ENTITY: 422, a new _ errors property is added a to
each instance with errors, indicating the validation errors encountered for that instance.
The property  _errors, when set, returns a list (Array) where each element has the
following structure: 
 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 17/214
{
“property”: property_name_with_error (string),
“error”: description_of_the_found_error (string)
}
Example de Response  ZSAPI_UNPROCESSABLE_ENTITY:
{“store”:{
(...)
, _errors:[{
“property”: “codigo”,
“error”: “Codigo must be an integer”
} ]
(...)
}
}
Note: In addition to the response codes described in each interface it is possible for
ZSAPI to return the following response codes: ZSAPI_TO_MANY_REQUESTS: 429,
ZSAPI_INTERNAL_SERVER_ERROR: 500, ZSAPI_NOT_IMPLEMENTED:
501. We advise that applications be prepared to handle all http response codes
themselves.
Communication Guide for support requests to 
api@zonesoft.org
The support channel api@zonesoft.org exists to assist integrators in developing their 
solutions using ZSAPI. To better assist in the requests for support by the 
api@zonesoft.org channel, the following must be taken into account:
● The support team will always assume that the integrators have read the
documentation.
● For the same subject should be kept the history of exchanged emails - this way
any member of the team will have more immediate access to all information
exchanged on the subject addressed.
● The team does not know the solution that the integrator is implementing so the
communication should be as clear as possible, keeping within the scope of the
subject addressed and should not be based on assumptions.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 18/214
● Whenever the request for help/clarification a request concerns to the API  must
be included in the following elements the initial email (in addition to any other
information they deem necessary):
○ request url including the ZSAPI version eg:
https://api.zonesoft.org/v3/produtos/getInstance
○ copy request Sent.
○ copy of the response in case of doubt.
● Questions or inquiries about how to affect behaviors of our applications using
ZSAPI (for example: which fields/values   need to be affected/set to produce
certain behaviors in our applications) can be forwarded to Zone Soft's global
support team, as they will be more qualified for such clarifications.
Conventions for Data Types
Data Type Conventionated Format Example Description
date YYYY-MM-DD 2001-01-01 Date ISO 8601
datetime YYYY-MM-DD hh:mm:ss 2001-01-01 08:30:25 Date/time ISO 8601

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 19/214
Access
ZSAPI is only available to Zone Soft Clients who are properly licensed for this purpose.
To access ZSAPI services all users are submitted to register in portal developers
(https://developer.zonesoft.org)
After registering you have access to your “ client id ”, “ app-key” and “ app-secret”.
All incoming requests to our API must include the specified header including your signature.
 - Example JSON request with headers required
curl --location 'https://api.zonesoft.org/v3/breaks/getInstances' \
--header 'Content-Type: application/json' \
--header 'X-ZS-SIGNATURE: YOUR-X-ZS-SIGNATURE' \
--header 'X-ZS-CLIENT-ID: YOUR-X-ZS-CLIENT-ID' \
--header 'X-ZS-APP-KEY: YOUR-X-ZS-APP-KEY' \
--data '{
    "break": {
        "limit": "10"
    }
}'
X-ZS-SIGNATURE - signature your body with hmac256 with your “app-secret”. 
Example signature in php
hash_hmac('SHA256', $your-body, $your-app-secret);
X-ZS-CLIENT-ID - your client id associated with a store and permissions the access
X-ZS-APP-KEY - your “app-key”
These last two headers and your-app-secret can be obtained from 
developer.zonesoft.org

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 20/214
Interfaces ZSAPI
Interface::Breaks
Interface responsible for processing all Requests concerning instances of: break.
Model Entity: Break
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ break”   of type Array<Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"break": [
    {
    "armazem": null,
    "codigo": 2,
    "data": "2021-03-01",
    "datahora": "2021-03-01 13:02:34",
    "empid": 1,
    "idcx": 1233,
    "lastupdate": "2021-03-01 13:02:34",
    "loja": 5,
    "mesa": 1,
    "motivo": 0,
    "motivodesc": "Artigo anulado s",

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 21/214
    "posto": 0,
    "precocompra": 0,
    "precovenda": 0,
    "qtd": 1,
    "valor": 0,
    "_errors": []
    }
]
(...)
Note: See information about listings.
Interface::Cancellations
Interface responsible for processing all Requests concerning instances of: cancellation.
Model Entity: Cancellation
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “cancellation”   of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
 "cancellation": [
    {
    "codigo": 2700028,

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 22/214
    "data": "2017-10-12",
    "datahora": "2017-10-12 14:56:10",
    "datahora_pedido": null,
    "descricao": "Febra de Porco",
    "empid": 2,
    "id": 366,
    "idcx": 3581,
    "lastupdate": "2019-09-10 15:44:30.154",
    "loja": 5,
    "mesa": 1001,
    "motivo": 2002,
    "motivodesc": "7",
    "posto": 1,
    "precocompra": 0,
    "precovenda": 0,
    "qtd": 1,
    "valor": 0,
    "_errors": []
    }, (...)
Note: See information about listings.
Interface::Cards
Interface responsible for processing all Requests concerning instances of: card.
Model Entity: Card
Action::deleteInstances
Each instance of the Model Entity to be processed must conform with the Model
Entity structure.
Arguments:
Argument Required Type Description
card YES json Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 23/214
card [numero] YES integer Card ID.
Example request using JSON:
{
    "card":[
{"numero":11},
{"numero":12}
     ]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All instances are returned in the Response  inside the
attribute  “ card”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstance
Returns the requested Model Entity instance.
Arguments:
Argument Required Type Description
card [codigo] YES integer Card ID.
Example request using JSON:
{
    "card":{ "codigo":2}
}
Responses: 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 24/214
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “card”   of type <Model Entity> - see document
for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ card”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
  "card": [
        {
          "loja": 1,
          "numero": 4,
          "cliente": 6,
          "saldo": -9.01,
          "estado": 0,
          "motivo": "aaaa ddddd  ccccc",
          "data": "2016-04-11",
          "prepago": 1,
          "minimo": 0,
          "mingrupo": 0,
          "maximo": 0,

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 25/214
          "maxgrupo": 0,
          "zona": 0,
          "serie": 0,
          "perfil": 0,
          "creditos": 0,
          "gravacao": "",
          "maxcredito": 12,
          "lastupdate": "2016-04-11 10:05:11"
        }, (...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
card [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“card”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “card”   of type Array - see document for the
model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 26/214
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
card [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“card”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ card”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
      "card": [
       {
          "loja": 1,
          "numero": 1019,
          "cliente": 0,
          "saldo": 0,
          "estado": 0,
          "motivo": "stuff",
          "data": "1899-12-30",
          "prepago": 1,
          "minimo": 0,
          "mingrupo": 0,
          "maximo": 0,
          "maxgrupo": 0,

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 27/214
          "zona": 0,
          "serie": 0,
          "perfil": 0,
          "creditos": 0,
          "gravacao": "",
          "maxcredito": 0,
          "lastupdate": "2017-01-30 14:56:22"
        } (...)
Note: See information about listings.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
card YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Each instance of the Model Entity to be processed must conform with the Model Entity
structure.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 28/214
Action::setFullSync
Mark all Model Entities to be synchronized. 
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) In Response, an (empty) instance of type <Model Entity>
inside the attribute “card”.
StatusCode::ZSAPI_NOT_MODIFIED (304) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Cardsseries
Interface responsible for processing all Requests concerning instances of card’s series:
cardsseries.
Model Entity: Cardseries 
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
cardseries YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
cardseries [codigo] YES integer Cardseries ID.
Example request using JSON:
{

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 29/214
"cardseries":[
{"codigo":1},
{"codigo":2}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “ cardseries”   of type  Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
cardseries [codigo] YES integer Cardseries ID.
Example request using JSON:
{
"cardseries":{
"codigo":2
}
}

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 30/214
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ cardseries”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “cardseries”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"cardseries":[
{"codigo":1,"descricao":"Serie 1",...},
{"codigo":2,"descricao":"Serie 2",...}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 31/214
Arguments:
Argument Required Type Description
cardseries [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“cardseries”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “cardseries”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
cardseries [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“cardseries”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 32/214
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “cardseries”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
cardseries YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Cashflowmotives
Action::getInstance
Returns the requested Model Entity instance. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 33/214
Arguments:
Argument Required Type Description
cashflowmotive [codigo] YES integer Cashflowmotive ID.
Example request using JSON:
{
"cashflowmotive":{
"codigo":1
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “cashflowmotive”   of type <Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “cashflowmotive”   of type <Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 34/214
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a date time greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
cashflowmotive 
[lastupdate]
YES datetime Verification Timestamp. 
Example request using JSON:
{
“cashflowmotive”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “cashflowmotive”   of type Array<Model Entity>
- see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
      "cashflowmotive": [
        {
                "categoria": null,
                "cod_externo": "",
                 "codigo": 1,
                 "descricao": "teste",
                 "lastupdate": "",
                 "loja": 26,
                 "sync": 1,
                 "tipo": 0,
        } 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 35/214
(...)
Note: See information about listings.
Interface::Cashoutflows 
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “cardseries”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"cashoutflow":[
{"loja":"5","caixa":"5", "data":null,"valor":null, "descricao":null, "empid":null, "empnome":null,
"datahora":"2022-11-2810:08:33","idcx":"374","numero":"0","doc":"","serie":"", 
"produto":"0","codigo_motivo":null,"lastupdate":"2022-11-2810:59:05.008",  
"saidascaixacol":null, "saidascaixacol1":null}
]
(...)
Interface::Categories 
Interface responsible for processing all Requests concerning instances of product’s
categories: category.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 36/214
Model Entity: Category
Related Model Entities: Subcategory
Action::deleteInstances
Each instance of the Model Entity to be processed must conform with the Model
Entity structure.
Arguments:
Argument Required Type Description
category YES json Array An Array of JSON Object
of type <Model Entity>.
Cada instância Family dentro do Array deve obedecer à seguinte estrutura:
category [codigo] YES integer Category ID.
Example request using JSON:
{
"category":[
{"codigo":11},
{"codigo":12}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All instances are returned in the Response  inside the
attribute  “category”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 37/214
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Só podem ser removidos instâncias da Model Entity que não estejam associados a
transações e que não tenham subfamílias associadas a transações.
Action::getInstance
Returns the requested Model Entity instance.
Arguments:
Argument Required Type Description
category [codigo] YES integer Category ID
Example request using JSON:
{
    "category":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ category”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 38/214
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “category”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
      "category": [ {
        "codigo": 1,
        "descricao": "Cafés",
        "loja": 1,
        "subcategories": [
          {
            "codigo": 5,
            "descricao": "cafe",
            "categoria": 1,
            "sync": 0,
            "lastupdate": "2016-04-11 10:53:55"
          }
        ],
        "lastupdate": "2016-09-28 17:03:23"
      } ]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
category [lastupdate] YES datetime Verification Timestamp. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 39/214
Example request using JSON:
{
“category”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “category”   of type Array - see document for the
model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
category [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“category”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “category”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 40/214
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
      "category": [
        {
          "codigo": 914,
          "descricao": "Sem Categoria",
          "loja": 1,
          "subcategories": "",
          "lastupdate": "2016-10-07 09:41:16"
        } 
(...)
Note: See information about listings.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
category YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Each instance of the Model Entity to be processed must conform with the Model Entity
structure.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 41/214
Action::setFullSync
Mark all Model Entities to be synchronized. 
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) In Response, an (empty) instance of type <Model Entity>
inside the attribute “category”.
StatusCode::ZSAPI_NOT_MODIFIED (304) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Characteristics
Interface responsible for processing all Requests concerning instances of  product’s
characteristics: characteristic.
Model Entity: Characteristic
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
characteristic YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
characteristic [id] YES integer Characteristic ID.
Example request using JSON:
{
"characteristic":[

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 42/214
{"id":1},
{"id":2}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “ characteristic”   of type
Array<Model Entity> - see document for the model entity
structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
characteristic [id] YES integer Characteristic ID.
Example request using JSON:
{
"characteristic":{
"id":2
}
}
Responses: 
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 43/214
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “characteristic”   of type <Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “characteristic”   of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"characteristic":[
{"id":1,"valor":"Cor",”ativo”:0},
{"id":2,"nome":"Tamanhos",”ativo”:1}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 44/214
Arguments:
Argument Required Type Description
characteristic 
[lastupdate]
YES datetime Verification Timestamp. 
Example request using JSON:
{
“characteristic”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “characteristic”  of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
characteristic 
[lastupdate]
YES datetime Verification Timestamp. 
Example request using JSON:
{
“characteristic”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 45/214
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “characteristic”   of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
characteristic YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Clients
Interface responsible for processing all Requests concerning instances of: client.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 46/214
Model Entity: Client
Related Model Entities: Addresses
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
client YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
client [codigo] YES integer ID do cliente.
Example request using JSON:
{
"client":[
{"codigo":11},
{"codigo":12}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “client”   of type Array<Model Entity>
- see document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 47/214
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
client [codigo] YES integer Client ID.
Example request using JSON:
{
"client":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “client”   of type <Model Entity> - see document
for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ client”   of type Array<Model Entity>  - see
document for the model entity structure.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 48/214
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"client":[
{"codigo":12,"nome":"André Schneider",”morada”:””,(...)},
{"codigo":12,"nome":"André Schneider",”morada”:””,(...)}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
client [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“client”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “ client”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 49/214
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
client [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“client”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ client”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database
Arguments:
Argument Required Type Description
client YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 50/214
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Note:  Only instances with client.codigo > 1 are accepted as client.codigo = 0 and client.codigo =
1 are system reserved instances.
Action::setFullSync
Mark all instances of the Model Entity to be synchronized.
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) In the Response, an empty instance of type <Model
Entity>  inside the attribute “client”.
StatusCode::ZSAPI_NOT_MODIFIED (304) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::setInstancesAsInactive
Processa uma lista (Array) de instâncias da Model Entity para serem marcados
como inativos na base de dados.
Arguments:
Argument Required Type Description
client YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
client [codigo] YES integer Client ID.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 51/214
Example request using JSON:
{
"client":[
{"codigo":11},
{"codigo":12}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances have been successfully processed.
All request instances are returned in the Response
inside the attribute  “client”   of type Array<Model Entity>
- see document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
Ocorreu um erro ao tentar processar pelo menos uma
das instâncias.
A(s) instância(s) com erro nsão retornadas na Response
inside the attribute  “client”   of type Array<Model Entity>
- see document for the model entity structure.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Couverts
Interface responsible for processing all Requests concerning instances of couverts.
Model Entity: Couvert 
Related Model Entities: Couvertzone
Action::deleteInstances

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 52/214
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
couvert YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
couvert [codigo] YES integer Couvert ID.
Example request using JSON:
{
"couvert":[
{"codigo":1},
{"codigo":2}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “ couvert”   of type  Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can
be removed.
Action::getInstance
Returns the requested Model Entity instance. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 53/214
Arguments:
Argument Required Type Description
couvert [codigo] YES integer Couvert ID.
Example request using JSON:
{
"couvert":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ couvert”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “couvert”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 54/214
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"couvert":[
{"codigo":1,"descricao":"Entrada Azeitonas e Queijo",(...)},
{"codigo":2,"descricao":"Azeitonas",(...)}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
couvert [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“couvert”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “ couvert”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 55/214
Arguments:
Argument Required Type Description
couvert [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“couvert”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “couvert”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
couvert YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 56/214
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Discounttickets
Interface responsible for processing all Requests concerning instances of the types of
payments options available:  discounttickets.
Model Entities: Discountticket
Action::getInstance
Returns the requested Model Entity instance.
Arguments:
Argument Required Type Description
discountticket[numero] YES string Discountticket ID.
Example request using JSON:
{
"discountticket":{
"numero":”1111.1”
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “discountticket”   of type <Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 57/214
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “discountticket”   of type Array<Model Entity>-
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"discountticket":[
{"client":null,"data":"2018-03-10","datafim":"2019-03-10","descontado":0,...},
{"client":null,"data":"2019-01-04","datafim":"2020-01-04","descontado":0,...},
]
(...)
Note: See information about listings.
Interface::Documents
Interface responsible for processing all Requests concerning instances of: document.
Model Entity: Document
Related Model Entities: Sale, Store, PaymentDoc, Counterbalance
Action::getCounterBalancesInstancesFromDocument

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 58/214
Returns a list (Array) containing all instances of the entity CounterBalance for a
Document.
See Model Entity Structure: CounterBalance. 
Arguments:
Argument Required Type Description
document [doc] YES string(2) The document type ID.
document [serie] YES string(20) The ID of the document
series.
document [numero] YES integer The document number in
for given document series.
Example request using JSON:
{
"document":{
"numero":"1","doc":"RC","serie":"1L111025"
}
}
 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute "counterbalance" of type Array<Model Entity>
- see document on entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"counterbalance":[
{"rc":1,”rcSerie”:”L1SAWT62”,(...)},
{"rc":1,”rcSerie”:”L1SAWT62”,(...)}
]
}
(...)
Action::getDocumentsHeaders

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 59/214
Returns a list (Array) of instances Model Entity with  only the documents’ headers
- no related entities.
Arguments: Optional to use the arguments for the listings.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Documents are returned in the Response inside the
attribute "document" of type Array<Model Entity>.
- see document on the structure of the entity.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"document":[
{"numero":"1","doc":"RC","serie":"1L111025"},
{"numero":"122","doc":"FA","serie":"1L111025"}
]
(...)
Note: See information about listings.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
document [doc] YES string(2) The document type ID.
document [serie] YES string(20) The ID of the document
series.
document [numero] YES integer The document number in
for given document series.
Example request using JSON:
{

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 60/214
"document":{
"numero":"1","doc":"AD","serie":"1L111025"
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ document”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) of complete instances (with their dependent entities) of the
Model Entity.
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “document”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"document":[
{"numero":"1","doc":"RC","serie":"1L111025"},
{"numero":"122","doc":"FA","serie":"1L111025"}
]
(...)

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 61/214
Note: See information about listings.
Action::getPaymentDocInstancesFromDocument
Returns a list ( Array) containing all instances of the entity PaymentDoc for a
document whose payment type is 9 - multiple payments.
 
See Model Entity Structure - PaymentDoc.
Arguments:
Argument Required Type Description
document [doc] YES string(2) The document type ID.
document [serie] YES string(20) The ID of the document
series.
document [numero] YES integer The document number in
for given document series.
Example request using JSON:
{
"document":{
"numero":"1","doc":"AD","serie":"1L111025"
}
}
 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute "paymentdoc" of type Array <PaymentDoc> -
see document on entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No Payment registries were found for the given
document.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"paymentdoc":[

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 62/214
{"numero":1,”doc”:”FA”,”serie”:”L1SAWT62”,”tipo”:1,(...)},
{"numero":1,”doc”:”FA”,”serie”:”L1SAWT62”,”tipo”:2,(...)}
]
}
(...)
Action::saveATCode
Allows to save the code returned by the Portuguese Financial Authority to an
instance of the Entity Model.
Arguments:
Argument Required Type Description
document [doc] YES string(2) The document type ID.
document [serie] YES string(20) The ID of the document
series.
document [numero] YES integer The document number in
for given document series.
document [ATDocCodeID] YES string Código fornecido pela AT.
document 
[ATDocCodeSource]
YES string(2) One of the following values
M - if entered manually;
P - if it was registered
automatically
Example request using JSON:
{
"document":{
"numero":"1","doc":"AD","serie":"1L111025",”ATDocCodeID”:”EA12131DS”,”ATDocCodeSource
ID”:”P”
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance of the Document Voided in Response is
returned inside the attribute "document" of type <Model
Entity> - see document on entity structure.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 63/214
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error canceling the Document.  
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveATTransportInstance
Allows you to use ZSAPI to communicate a transport document to the AT. If the
document is successfully communicated it will be processed to be stored in the
database.
Arguments:
Argument Required Type Description
document YES JSON object A JSON Object instance of
type <EntityModel>.
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (201) The instance was successfully processed. You should
check the response code to act accordingly.
An instance of ATResponse will be returned - you should
see the Model Entity structure for ATResponse.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
The instance received is not valid.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Each instance to be processed must conform to the complete structure of the Model Entity.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Note: 
For instances of the Model Entity from other certified softwares, the property
ATDocCodeSource will have its value changed to  'I' (capital i)  and property 
hashcontrol2 must be populated with the source software certification number and the
hash version number according to the legislation. The property hash should contain the

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 64/214
hash generated by the original software . Both hash and hashcontrol2 properties are
required when the document to be integrated is reported in SAFT (model required for
communications with Portuguese financial authority), documents of type  'FA', 'FS', 'FT',
'GT', ' GR ',' TA ',' GD ',' CM ',' RC '.  
Arguments:
Argument Required Type Description
document YES array | json object An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) All instances were saved successfully.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one
instance or one of its Related Entities (Sales,
PaymentDocs, CounterBalances).
The failed instance (s) - including its Related Entities -
have not been recorded. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Notes:
1. Each instance of the Model Entity to be processed must conform with the Model Entity structure.
2.When sending documents of type CFA, CFT, CFS, CVD, CTK, CNC they will be replaced,
if they already exist
Action::setInstanceAsNulled
Permite anular uma instância da Model Entity.
Arguments:
Argument Required Type Description
document [doc] YES string(2) The document type ID.
document [serie] YES string(20) The ID of the document
series.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 65/214
document [numero] YES integer The document number in
for given document series.
document [empanulado] YES integer Operator ID that nullified
the document.
document [descanulado] YES string Reason why document
was nullified.
document 
[data_alteracao]
YES datetime Date the document was
nullified.
Example request using JSON:
{
"document":{
"numero":"1","doc":"AD","serie":"1L111025",”empanulado”:12,”descanulado”:”Devolução do
Cliente”
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance of the Nulled Document in the Response is
returned under the attribute "document" of type <Model
Entity> - see document on entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error canceling the Document.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Exemptionreasons
Interface responsible for processing all Requests  relative  to tax exemption reasons:
exemptionreason.
Model Entity: Exemptionreason
Action::deleteInstances

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 66/214
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
exemptionreason YES json Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
exemptionreason 
[codigo]
YES integer Exemptionreason ID.
Example request using JSON:
{
"exemptionreason":[
{"codigo":’M01’},
{"codigo":’M02’}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute   “exemptionreason”   of type
Array<Model Entity> - see document for the model entity
structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 67/214
Returns the requested Model Entity instance.
Arguments:
Argument Required Type Description
exemptionreason 
[codigo]
YES integer Exemptio reason ID.
Example request using JSON:
{
"exemptionreason":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “exemptionreason”   of type <Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity.
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ exemptionreason”   of type Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 68/214
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"exemptionreason":[
{"codigo":1,"descricao":"Loja Amadora”},
{"codigo":2,"descricao":"Loja Braga”}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
exemptionreason 
[lastupdate]
YES datetime Verification Timestamp. 
Example request using JSON:
{
“exemptionreason”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ exemptionreason”  of type Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 69/214
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
exemptionreason
[lastupdate]
YES datetime Verification Timestamp. 
Example request using JSON:
{
“exemptionreason”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ exemptionreason”   of type Array - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: See information about listings.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
exemptionreason YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 70/214
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Action::setFullSync
Mark all instances of the Model Entity to be synchronized. 
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) In the Response, an empty instance of type <Model
Entity>  inside the attribute “exemptionreason”.
StatusCode::ZSAPI_NOT_MODIFIED (304) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Families 
Interface responsible for processing all Requests concerning instances of product’s
families - family.
Model Entity: Family 
Related Model Entities: SubFamily 
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 71/214
Arguments:
Argument Required Type Description
group YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
group [codigo] YES integer Group ID.
Example request using JSON:
{
"group":[
{"codigo":1},
{"codigo":2}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “group”   of type Array<Model Entity>
- see document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance.
Arguments:
Argument Required Type Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 72/214
family [codigo] YES integer Family ID.
Example request using JSON:
{
"family":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “family”   of type <Model Entity> - see document
for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ family”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 73/214
(...)
"family":[
{"codigo":1,"descricao":"Entradas”,”frontoffice”:1,”posicaofront”:100,”posicaoprint”:1,”fu
ndo”:1,”letra”:1,”subfamilias”:[{subfam1}, {subfam2}]},
{"codigo":2"descricao":"Acompanhamentos”,”frontoffice”:1,”posicaofront”:102,”posicaop
rint”:12,”fundo”:1,”letra”:1,}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
family [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“family”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “family”   of type Array - see document for the
model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 74/214
Arguments:
Argument Required Type Description
family [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“family”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ family”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"family":[
{"codigo":1,"descricao":"Entradas”,”frontoffice”:1,”posicaofront”:100,”posicaoprint”:1,”fu
ndo”:1,”letra”:1,},
{"codigo":2"descricao":"Acompanhamentos”,”frontoffice”:1,”posicaofront”:102,”posicaop
rint”:12,”fundo”:1,”letra”:1,}
]
(...)
Note: See information about listings.
 Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 75/214
Argument Required Type Description
family YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Action::setFullSync
Mark all Model Entities to be synchronized. 
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) In Response, an (empty) instance of type <Model Entity>
inside the attribute “family”.
StatusCode::ZSAPI_NOT_MODIFIED (304) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Groups
Interface responsible for processing all Requests concerning instances of product’s
groups - groups.
Model Entities: Group 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 76/214
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
group [codigo] YES integer Group ID.
Example request using JSON:
{
"group":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “group”   of type <Model Entity> - see document
for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 77/214
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ group”   of type Array<Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"group":[
{"codigo":1,"descricao":"Grupo 1",...},
{"codigo":2,"descricao":"Grupo 2",...}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
group [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“group”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “ group”  of type Array<Model Entity> - see
document for the model entity structure.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 78/214
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
group [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“group”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ group”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 79/214
group YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Happyhours
Interface responsible for processing all Requests concerning instances of: happyhour.
Model Entities: Happyhour 
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
happyhour YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
happyhour [codigo] YES integer Happyhour ID.
Example request using JSON:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 80/214
{
"happyhour":[
{"codigo":1},
{"codigo":2}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “ happyhour”   of type  Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
happyhour [codigo] YES integer Happyhour ID.
Example request using JSON:
{
"happyhour":{
"codigo":2
}
}
Responses: 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 81/214
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ happyhour”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “happyhour”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"happyhour":[
{"codigo":1,"descricao":"Oferta 2º",”dom”:0,...},
{"codigo":2,"descricao":"Oferta 3º",”dom”:1,...}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 82/214
Arguments:
Argument Required Type Description
happyhour [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“happyhour”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “happyhour”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
happyhour [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“happyhour”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 83/214
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “happyhour”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
happyhour YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Invoicedocuments
Interface responsible for processing all Requests concerning instances of:
invoicedocument.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 84/214
Access to this interface requires the permission “API invoice documents” defined in
developer.zonesoft.org
Model Entity: Invoicedocument
Related Model Entities: Sale, Delivery
Note: Invoicedocument is a specialization of the Model Entity Document for that
reason instances of Invoicedocument may exist as instances of Document in responses
from the Interface::Documents.  
Use the structure of Document model entity as reference.
Supported document types: VD, FT
- FT for stores that operate inside Portugal; 
- VD for stores that operate outside Portugal; 
The country where the store operates is defined by a configuration inside our software
applications.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
invoicedocument [doc] YES string(2) The document type ID.
invoicedocument [serie] YES string(20) The ID of the document
series.
invoicedocument 
[numero]
YES integer The document number in
for given document series.
Example request using JSON:
{
"invoicedocument":{
"numero":"1","doc":"FT","serie":"1L111025"
}
}
Responses: 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 85/214
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “invoicedocument”   of type <Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) of complete instances (with their dependent entities) of the
Model Entity.
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ invoicedocument”   of type Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"invoicedocument":[
{"numero":"1","doc":"FT","serie":"1L111025"},
{"numero":"122","doc":"FT","serie":"1L111025"}
]
(...)
Note: See information about listings.
Action::saveInstance
Allows to save an instance of the Model Entity, and sign it with a valid certification
key.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 86/214
If a Delivery instance is set on the invoicedocument.delivery property, that information
will be used by our software for delivery management.
Updates are not supported - attempts to save an existing invoice document will cause a
new invoice document to be created and returned in the response.
The client at which the document is created for must already exist. If the client does not
exist, the document will issued to the client with id 0 (zero). 
Note: 
Clients with ids 0 and 1 (zero and one) are reserved by our software applications and will have
predefined workflows and behaviours when processing the document - explanation about
those behaviours fall outside the scope of this document and API’s support channel. Support
requests about those behaviours sent to the API’s support channel will not be processed.
Arguments:
Argument Required Type Description
invoicedocument [doc] YES string(2) The document type ID.
(VD,FT)
invoicedocument [cliente] YES integer The client ID.
invoicedocument 
[ivaincluido]
YES integer This field should always be
1.
Invoicedocument
[fornecedor]
YES Integer Supplier ID
invoicedocument[delivery] NO | null object A JSON Object  of type
<Delivery> model entity.
invoicedocument[emp] NO | 0 integer Operator ID.
invoicedocument [vendas] YES array Sales lines
invoicedocument 
[vendas][codigo]
YES integer Product ID.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 87/214
invoicedocument 
[vendas][qtd]
YES float Product quantity
invoicedocument 
[vendas][punit]
YES float Price for Unit of product
invoicedocument 
[vendas][desconto]
YES float Discount in value
invoicedocument 
[vendas][obs]
NO string Remarks/observations
invoicedocument 
[vendas][armazem]
NO | 1 integer Wharehouse ID.
Example request using JSON:
{
"invoicedocument": [{
"loja": 1,
"doc": "FT",
"cliente": 0,
"pagamento": 1,
"ivaincluido": 1,
                          “fornecedor”: 1,
"vendas": [{
"codigo": 21,
"qtd": 1,
"punit": 1,
"desconto": 0,
"obs": ""
},
{
"codigo": 10,
"qtd": 1,
"punit": 2,
"desconto": 0.50,
"obs": ""
}],
“delivery”:{
“morada”: “delivery address”,
“dataentrega”: “2018-11-01 04:30:01”,
“obs”: “some extra info”,
“contacto”: “960960960”
}]
}

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 88/214
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Document has been saved
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while saving the Document.  
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: 
Upon a successful save the invoice document is returned in the response and it will have a 
new property “pdf” that will contain the url for the invoice pdf file.
The url will be available for 30 days.
Action::setInstanceAsNulled
Allows you to nullify an instance of the Model Entity that has been has been saved
by the previous method. To use this method, the client_id used must have this
active property, this same activation is not automatic and can only be done by
Zone Soft, this entity only accepts documents of type (VD, FT).
Arguments:
Argument Required Type Description
invoicedocument [doc] YES string(2) The document type ID.
(VD,FT)
invoicedocument [serie] YES string The ID of the document
series.
invoicedocument [numero] YES integer The document number in
for given document series.
invoicedocument 
[descanulado]
YES string Reason why document
was nullified.
Example request using JSON:
{
    "invoicedocument": {
        "loja": 1,
        "doc": "FT",

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 89/214
        "serie": "AP2017L1",
        "numero": 67,
        "descanulado": "MOTIVO DA ANULAÇÂO"
    }
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Invoice Document was nullified 
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error nullifying the Invoice  Document. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Movements
Interface responsible for processing all Requests concerning instances of: movements.
Model Entity: Movements
 Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
movements[cartao] YES Integer The movements type ID.
movements[codigo] YES Integer The ID of the movement
codigo.
movements[pos] YES integer The ID of the movement
pos.
movements[datahora] YES datetime Verification Timestamp.
Example request using JSON:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 90/214
{
        "movement":  {
          "cartao":2,
          "codigo": 16,
          "pos": 1,
          "datahora": "2012-04-11 12:30:23"
        }
}
Action::getInstances
Returns a list (Array) of complete instances (with their dependent entities) of the
Model Entity.
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “movement”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
 "movement": [
            {
                    "cartao": 1,
                    "codigo": 132,
                    "codprom": 0,
                    "data": "2012-07-19",
                    "datahora": "2012-07-20 16:28:54",
                    "descricao": "Manteiguinhas",
                    "emp": 2,
                    "id": 405,
                    "id_loja": 0,
                    "lastupdate": "2019-05-29 15:01:21.845",
                    "loja": 5,

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 91/214
                    "nome": "Tecnico",
                    "pos": 2,
                    "processado": 1,
                    "qtd": 1,
                    "serie": 0,
                    "sync": 1,
                    "valor": 1,
                    "_errors": []                
            }
            ]
(...)
Note: See information about listings.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
movements[lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
  "movement":{
"lastupdate": "2017-05-08 00:01:00"
    }
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “movement”   of type Array - see document for
the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 92/214
Note: See information about listings.
Interface::Numdocseries
Interface responsible for processing all Requests  relative to instances of document’s
series numbering: numdocseries.
Model Entity: Numdocserie
Action::getInstances
Returns a list (Array) of complete instances (with their dependent entities) of the
Model Entity.
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “numdocserie”   of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"numdocserie":[
{"numero":"1","doc":"RC","serie":"1L111025"},
{"numero":"122","doc":"FA","serie":"1L111025"}
]
(...)
Note: See information about listings.
Action::saveInstances

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 93/214
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
numdocserie YES JSON object A JSON Object  of type
<Model Entity>.
Example de pedido em JSON:
(...)
"numdocserie":[
{"numero":1,"doc":"RC","serie":"1L111025"},
{"numero":122,"doc":"FA","serie":"1L111022"}
]
(...)
Responses:
Response Code Description
StatusCode::ZSAPI_CREATED (201) The instance was successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while trying to save the instance.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: The instance to be processed must conform to the complete structure of the Model Entity.
Interface::Operators
Interface responsible for processing all Requests concerning instances of  operadores
(employees)  - operator.
Model Entities: Operator 
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 94/214
Arguments:
Argument Required Type Description
operator YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
operator [codigo] YES integer Operator ID.
Example request using JSON:
{
    "operator":[
{"codigo":11},
{"codigo":12}
       ]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “ operator”   of type Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getActiveInstances
Returns a list (Array) containing all instances of the Model Entity that are marked
as 'active'. 
Arguments: Optional to use the arguments for the listings. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 95/214
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “operator”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"operator":[
{"codigo":11,"foto":"",”bloqueado”:0,(...)},
{"codigo":12,"foto":"",”bloqueado”:0,(...)}
]
(...)
Note: See information about listings.
Action::getInactiveInstances
Returns a list (Array) containing all instances of the Model Entity that are marked
as 'inactive'.  
Arguments: Optional to use the arguments for the listings. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “operator”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) Não foram encontradas instâncias desta Model Entity.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 96/214
"operator":[
{"codigo":25,"foto":"",”bloqueado”:1,(...)},
{"codigo":18,"foto":"",”bloqueado”:1,(...)}
]
(...)
Note: See information about listings.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
operator [codigo] YES integer Operator ID.
Example request using JSON:
{
    "operator":{"codigo":2}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ operator”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 97/214
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “operator”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"operator":[
{"codigo":11,"foto":"",”bloqueado”:0,(...)},
{"codigo":12,"foto":"",”bloqueado”:1,(...)}
]
(...)
Note: See information about listings.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
operator [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“operator”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 98/214
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “operator”   of type Array - see document for the
model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: See information about listings.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
operator YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Action::setFullSync
Mark all Model Entities to be synchronized. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 99/214
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) In Response, an (empty) instance of type <Model Entity>
inside the attribute “operator”.
StatusCode::ZSAPI_NOT_MODIFIED (304) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Options
Interface responsible for processing all Requests concerning instances of group’s
options: options.
Model Entities: Option 
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
option YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
option [codigo] YES integer Option ID.
Example request using JSON:
{
"option":[
{"codigo":1},

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 100/214
{"codigo":2}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “option”   of type Array<Model Entity>
- see document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
option [codigo] YES integer Option ID.
Example request using JSON:
{
"option":{
"codigo":2
}
}
Responses: 
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 101/214
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ option”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ option”   of type Array<Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"option":[
{"codigo":1,"descricao":"Opção 1",”grupo”:1,...},
{"codigo":2,"descricao":"Opção 2",”grupo”:1,...}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 102/214
Arguments:
Argument Required Type Description
option [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“option:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “ option”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
option [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“option”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 103/214
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ option”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
option YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Paymentoptions
Interface responsible for processing all Requests concerning instances of the types of
payments options available:  paymentoptions.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 104/214
Model Entities: PaymentOption
Action::getInstance
Returns the requested Model Entity instance.
Arguments:
Argument Required Type Description
paymentoption [id] YES integer PaymentOption ID.
Example request using JSON:
{
"paymentoption":{
"id":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “paymentOption”   of type <Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 105/214
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “paymentOption”   of type Array<Model Entity>
- see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"paymentoption":[
{"descricao":"30 dias","dias":30,"id":3,"lastupdate":"2020-06-01 17:13:36.821",...},
{"descricao":"","dias":0,"id":4,"lastupdate":"2020-06-01 17:33:36.821",...},
]
(...)
Note: See information about listings.
Interface::Paymenttypes
Interface responsible for processing all Requests concerning instances of the types of
payments with code > 100 available:  paymenttypes.
Model Entities: PaymentType
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
paymenttype YES json Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 106/214
paymenttype [codigo] YES integer PaymentType ID.
Example request using JSON:
{
"paymenttype":[
{"codigo":11},
{"codigo":12}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “ paymentType”    of type
Array<Model Entity> - see document for the model entity
structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance.
Arguments:
Argument Required Type Description
paymenttype [codigo] YES integer PaymentType ID.
Example request using JSON:
{
"paymenttype":{
"codigo":2

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 107/214
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “paymenttype”   of type <Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “paymentType”   of type Array<Model Entity>-
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"paymenttype":[
{"codigo":1,"descricao":"Cartão Débito”},
{"codigo":1,"descricao":"Cartão Crédito”}
]
(...)
Note: See information about listings.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 108/214
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
paymenttype
[lastupdate]
YES datetime Verification Timestamp. 
Example request using JSON:
{
“paymenttype”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response  inside the
attribute “paymentType”  of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
paymenttype
[lastupdate]
YES datetime Verification Timestamp. 
Example request using JSON:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 109/214
{
“paymenttype”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “paymentType”   of type  Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: See information about listings.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
paymenttype YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 110/214
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Action::setFullSync
Mark all instances of the Model Entity to be synchronized.
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) In the Response, an empty instance of type <Model
Entity>  inside the attribute “paymentType”.
StatusCode::ZSAPI_NOT_MODIFIED (304) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Productioncentres
Interface responsible for processing all Requests concerning instances of:
productioncentre.
Model Entities: Productioncentre 
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
productioncentre YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 111/214
productioncentre 
[codigo]
YES integer Productioncentre ID..
Example request using JSON:
{
"productioncentre":[
{"codigo":1},
{"codigo":2}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “ productioncentre”   of type
Array<Model Entity> - see document for the model entity
structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
productioncentre 
[codigo]
YES integer Productioncentre ID.
Example request using JSON:
{

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 112/214
"productioncentre":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “productioncentre”   of type <Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ productioncentre”   of type Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"productioncentre":[
{"codigo":1,"descricao":"Bar ",...},
{"codigo":2,"descricao":"Balcao 22",...}
]
(...)

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 113/214
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
productioncentre 
[lastupdate]
YES datetime Verification Timestamp. 
Example request using JSON:
{
“productioncentre”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “ productioncentre”  of type Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
productioncentre 
[lastupdate]
YES datetime Verification Timestamp. 
Example request using JSON:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 114/214
{
“productioncentre”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ productioncentre”   of type Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
productioncentre YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 115/214
Interface::Products
Interface responsible for processing all Requests concerning instances of: products.
Model Entity: Produtos 
Related Entities: Unit, Family, SubFamily, Store, ExemptionReason
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
product YES json Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
product [codigo] YES integer Product ID.
Example request using JSON:
{
"product":[
{"codigo":11},
{"codigo":12}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “ product”   of type Array<Model
Entity> - see document for the model entity structure.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 116/214
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
product [codigo] YES integer Product ID.
Example request using JSON:
{
"product":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ product”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) of instances da Model Entity.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 117/214
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “product”   of type Array  <Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"product":[
{"codigo":1,"descricao":"Manteiga”,(...)},
{"codigo":2,"descricao":"Porta da Ravel”,(...)}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
product [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“product”:{"lastupdate": "2012-01-01 00:01:01.001"}
}

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 118/214
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response  inside the
attribute “ product”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
product [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“product”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “product”   of type Array - see document for the
model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: See information about listings.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 119/214
Action::getNextCodigo
Returns the next available produtc id.
Example request using JSON:
{
“product”:{}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Returns an instance of  <Model Entity> which porperty
‘codigo’ will contain the next available Product ID to be
used.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
product YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 120/214
Note:  In situations of updating products with associated sales only the modifications allowed by
law will be persisted.
Note: Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Action::setFullSync
Mark all instances of the Model Entity to be synchronized. 
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) In the Response, an empty instance of type <Model
Entity>  inside the attribute “product”.
StatusCode::ZSAPI_NOT_MODIFIED (304) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Productstocks
Interface responsible for processing all Requests concerning instances of products
stocks: productstock.
Model Entities: ProductStock
Action::getCurrentStockInstances
Returns a list ( Array) containing the instances of the Model Entity requested in
the request - the returned values   refer to the date the request is made. 
Arguments:
Argument Required Type Description
productstock YES Array An Array of JSON Object
of type <Model Entity>.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 121/214
Each instance within the Request Array must obey the following structure:
Argument Required Type Description
productstock [loja] YES integer Store ID.
productstock [produto] YES integer Product ID.
productstock [armazem] NO integer Wharehouse ID.
productstock 
[uid_caracteristica]
NO integer Characteristic combo ID.
Example request using JSON:
{
"productstock":[
{"produto":11,”loja”:1},
{"produto":12,”loja”:1,”armazem”:1},
{"produto":12,”loja”:1,”armazem”:1,”uid_caracteristica”:1}
]
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “productstock”   of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"productstock":[
{"produto":11,"loja":1,”stock”:232.22,”stkmin”:0,”stkmax”:1000.45,”data”:”2013-01-01”},
{"produto":12,"loja":1,”armazem”:1,”stock”:212.22,”stkmin”:0,”stkmax”:0,”data”:”2013-01-01”},
]
(...)
Note: The options in the listings do not apply.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 122/214
Action::getCurrentStockInstancesByBarcode
Returns a list ( Array) containing the instances of the Model Entity requested in
the request - the returned values   refer to the date the request is made. 
Arguments:
Argument Required Type Description
productstock YES Array An Array of JSON Object
of type <Model Entity>.
Each instance within the Request Array must obey the following structure:
Argument Required Type Description
productstock [loja] YES integer Store ID.
productstock 
[codbarras]
YES string Product Bar code.
productstock [armazem] NO integer Wharehouse ID.
productstock 
[uid_caracteristica]
NO integer Characteristic combo ID.
Example request using JSON:
{
"productstock":[
{"codbarras":”1247328497483278238”,”loja”:1},
{"codbarras":”1247328497483278232”,”loja”:1,”armazem”:1},
{"codbarras":”1247328497483278333”,”loja”:1,”armazem”:1,”uid_caracteristica”:1}
]
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “productstock”   of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 123/214
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"productstock":[
{"produto":11,"loja":1,”stock”:232.22,”stkmin”:0,”stkmax”:1000.45,”data”:”2013-01-01”},
{"produto":12,"loja":1,”armazem”:1,”stock”:212.22,”stkmin”:0,”stkmax”:0,”data”:”2013-01-01”},
]
(...)
Note: The options in the listings do not apply.
Action::getCurrentStockInStores
Returns an Array of instances of the Model Entity - one instance per store - the
returned stock value refers to the date the order is placed.
If the caracteristica_id is supplied in the request, the value of the property stock
in each instance of the response refers to the quantity in each store of the
combination produto + combinations of characteristics in which id_id is present.
If the_id_id is not supplied, the value of the property stock in each instance of the
response returns the existing quantity of the produto in each store - one instance
per produto + combination is returned.
The response only includes instances whose value of the property 'stock' is
greater than 0.
In the Response a new property is returned Store representing an instance of the
Model Entity Store containing store contact information - see Example Response.
In Response is returned a new property descricao of type string representing the
name of the combination of characteristics associated with the produto - see
example of Response.
Arguments:
Argument Required Type Description
productstock YES Array An Array of JSON Object
of type <Model Entity>.
Each instance within the Request Array must obey the following structure:
Argument Required Type Description
productstock [produto] YES integer Product ID.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 124/214
productstock 
[caracteristica_id]
NO integer Characteristic combo ID.
Example request using JSON:
{
"productstock": {"produto":6,”caracteristica_id”:9}
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “productstock”   of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"productstock":[
{"loja":6,"produto":6,"uid_caracteristica":229,"stock":20,"data":"2014-03-27","descricao":"T 
SHIRT - Cor: Laranja, Tamanho: L","caracteristica_id":9,"Store":{"codigo":6,"descricao":"Teste
Sonia","designacao":"Loja Teste Entroncamento","morada":"Rua ao pé da rotunda
23","numero_porta":"111","cod_postal":"1000-100","localidade":"Entroncamento"}},
{"loja":6,"produto":6,"uid_caracteristica":230,"stock":27,"data":"2014-03-27","descricao":"T 
SHIRT - Tamanho: XS, Cor: Azul","caracteristica_id":9,"Store":{"codigo":6,"descricao":"Teste
Sonia","designacao":"Loja Teste Entroncamento","morada":"Rua ao pé da rotunda
23","numero_porta":"111","cod_postal":"1000-100","localidade":"Entroncamento"}}
]
(...)
Note: The options in the listings do not apply.
Action::getStockInstanceByDate
Returns an instance of the Model Entity on the requested date. 
Arguments:
Argument Required Type Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 125/214
productstock [loja] YES integer Store ID.
productstock [produto] YES integer Product ID.
productstock [data] YES date Date in which to obtain the
instance
productstock [armazem] NO integer Wharehouse ID.
productstock 
[uid_caracteristica]
NO integer Characteristic combo ID.
Example request using JSON:
{
"productstock":{"produto":11,”loja”:1,”data”:”2013-01-01”}
}
Example de um Request JSON para um armazém:
{
"productstock":{"produto":12,”loja”:1,”armazem”:1,”data”:”2013-01-01”}
}
Example de um Request JSON para um armazém e combinação de
caracteristicas:
{
"productstock":{"produto":12,”loja”:1,”armazem”:1,”uid_caracteristica”:1}
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ productstock”  of type <Model Entity> - see
document for the model entity structure..
StatusCode::ZSAPI_NO_CONTENT (204) The instance of this Model Entity was not found.  
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 126/214
(...)
"productstock":[
{"produto":11,"loja":1,”stock”:232.22,”stkmin”:0,”stkmax”:1000.45,”data”:”2013-01-01”},
{"produto":12,"loja":1,”armazem”:1,”stock”:212.22,”stkmin”:0,”stkmax”:0,”data”:”2013-01-01”},
{"produto":12,"loja":1,”armazem”:1,”stock”:212.22,”stkmin”:0,”stkmax”:0,”data”:”2013-01-01”},
]
(...)
Note: The options in the listings do not apply.
Interface::Productstocksmovements
Interface responsible for processing all Requests concerning instances of movements of
product’s stocks: productstockmovement .
Model Entities: Productstockmovement
Action::getInstances
Returns a list ( Array) containing the instances of the Model Entity requested in
the request - the returned values   refer to the logged in store. 
Arguments:
Argument Required Type Description
productstockmovement YES Object An JSON Object  of type
<Model Entity>.
Each instance within the Request Array must obey the following structure:
Argument Required Type Description
productstockmovement 
[produto]
YES integer Product ID.
productstockmovement 
[armazem]
NO integer Wharehouse ID..
productstockmovement 
[uid_caracteristica]
NO integer Characteristic combo ID.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 127/214
Example request using JSON:
{
"productstockmovement":[
{"produto":11},
{"produto":12,”armazem”:1},
{"produto":12,”armazem”:1,”uid_caracteristica”:1}
]
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ productstockmovement”   of type
Array<Model Entity> - see document for the model entity
structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"productstockmovement":[
{"produto":11,"loja":1,”qtd”:-232.22,”doc”:“FA”,”numero”:145,”datahora”:”2013-01-01 
08:30:12”,...},
{"produto":11,"loja":1,”qtd”:-1,”doc”: “FA”,”numero”:144,”datahora”:”2013-01-01 09:30:12”,...},
]
(...)
Note: See information about listings.
Interface::Properties
Interface responsible for processing all Requests concerning instances of: property. 
A property defines a type of behaviour for a value to be used by one or more products.
Model Entities: Property

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 128/214
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
property [id] YES integer Property ID.
Example request using JSON:
{
"property":{
"id":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ property”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “property”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 129/214
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"property":[
{"id":1,"nome":"Bar ",...},
{"id":2,"nome":"Balcao 22",...}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
property [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“property”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “ property”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 130/214
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
property [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“property”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “property”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
property YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 131/214
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Action::setFullSync
Mark all instances of the Model Entity to be synchronized.  
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) In the Response, an empty instance of type <Model
Entity>  inside the attribute “property”.
StatusCode::ZSAPI_NOT_MODIFIED (304) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Reasonbreaks 
Interface responsible for processing all Requests concerning instances of reasons  of
stock breaks: reasonbreak.
Model Entity: ReasonBreak 
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 132/214
Argument Required Type Description
reasonbreak YES json Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
reasonbreak [codigo] YES integer(11) ReasonBreak ID.
Example request using JSON:
{
"reasonbreak":[
{"codigo":1},
{"codigo":2}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All instances are returned in the Response  inside the
attribute  “reasonbreak”   of type Array - see document
for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
reasonbreak [codigo] YES integer ReasonBreak ID.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 133/214
Example request using JSON:
{
"reasonbreak":{"codigo":2}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “reasonbreak”   of type <Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity.
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “reasonbreak”   of type Array - see document
for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"reasonbreak":[
{"codigo":1,“descricao”:"Lixo",(...)},
{"codigo":2,“descricao”:"Fora de Prazo",(...)}
]
(...)

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 134/214
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
reasonbreak [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“reasonbreak”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response  inside the
attribute “reasonbreak”  of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
reasonbreak [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 135/214
{
“reasonbreak”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “reasonbreak”   of type Array - see document
for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
reasonbreak YES json Array An Array of JSON Object
of type <Model Entity>.
Example request using JSON:
{
     "reasonbreak":
           [
             {"codigo":1,"descricao":"Lixo",”reposicao”:1},
             {"codigo":2,"descricao":"Fora de Prazo",”reposicao”:1}
          ]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 136/214
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Action::setFullSync
Mark all instances of the Model Entity to be synchronized.  
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) In the Response, an empty instance of type <Model
Entity>  inside the attribute “reasonbreak”.
StatusCode::ZSAPI_NOT_MODIFIED (304) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Sales
Interface responsible for processing all Requests concerning instances of document
lines: sales.
Model Entity: Sale
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 137/214
sale [doc] YES string(3) The document type ID.
sale [serie] YES string(20) The ID of the document
series.
sale [numero] YES integer The document number in
for given document series.
sale [id] YES integer Sale ID
Example request using JSON:
{
"sale":{
"numero":1,"doc":"FA","serie":"1L111025",”id”:1,(...)
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response inside the
attribute “sale”  of type <Model Entity> - see document
for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"sale":{"numero":1,”doc”:”FA”,”serie”:”1L111025”,”codigo”:1,(...)}
}
(...)
Action::getInstancesFromDocument
Returns a list ( Array) of instances of the Model Entity relative to a specific
document.
Arguments (optionally, arguments to the listings can be used):
Argument Required Type Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 138/214
sale [doc] YES string(3) The document type ID.
sale [serie] YES string(20) The ID of the document
series.
sale [numero] YES integer The document number in
for given document series.
Example request using JSON:
{
(...)
"sale":[
{"numero":"1","doc":"AD","serie":"1L111025",”total”:22.00;”qtd”:221.1111,”codigo”:1,”descricao”:”
Produto 1”,(...)},
{"numero":"2","doc":"AD","serie":"1L111025",”total”:212.00;”qtd”:1.1111,”codigo”:21,”descricao”:”
Produto 21”,(...)},
]
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ sale”   of type Array<Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"sale":[
{"numero":"1","doc":"RC","serie":"1L111025",(...)},
{"numero":"122","doc":"FA","serie":"1L111025",(...)}
]
(...)
Interface::Salesday

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 139/214
Interface responsible for processing all Requests concerning instances of tellers’ sales
day: salesday.
Model Entity: Salesday
Action::getInstance
Get an instance of the teller last sales day instance present in the database. . 
Arguments: 
Argument Required Type Description
salesday [caixa] YES integer Teller ID.
salesday [data] YES data The date the record refers
to.
Example request in JSON:
(...)
"salesday":{"caixa":1, "data":"2012-11-09"}
(...)
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) An instance is returned inside the attribute "salesday" of
type <Model Entity> - see document on entity structure.
StatusCode::ZSAPI_NOT_FOUND (404) No instance was found.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 140/214
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ salesday” of type Array<Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"salesday":[
{"caixa":1, "data":"2012-11-09",(...)},
{"caixa":2, "data":"2012-11-09",(...)}
]
(...)
Note: See information about listings.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
salesday YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) All instances were saved successfully.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
A(s) instância(s) com erro  não foram gravadas. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 141/214
Note: Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Salessessions
Interface responsible for processing all Requests concerning instances of tellers’ sales
sessions: salessession .
Model Entities: SalesSession
Action::closeSaleSession
Close the sales session in use. 
Arguments: 
Argument Required Type Description
salessession [caixa] YES integer Teller ID.
salessession [opencx] YES string Operator name.
salessession [idcx] YES integer Salesession ID.
salessession [empid] YES integer Operator ID.
salessession [data] YES date Salesession date returned
in action response:
getSaleSession.
Example request in JSON:
(...)
"salessession ":{”caixa”:2,”opencx”:”Operador 1”,"idcx":1,”empid”:1,”data”:”2013-01-01”}
(...)
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) The session was successfully closed - an instance is
returned inside the attribute " salessession " of type
<Model Entity> - see entity structure document.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error closing the session. You should see
the returned message.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 142/214
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstance
Create a sales session. To open a session, a salesday must be open and active
. If an open sales session already exists, that session is returned.
Arguments: 
Argument Required Type Description
salessession [caixa] YES integer Teller ID.
salessession [opencx] YES string Operator name.
salessession [empid] YES integer Operator ID.
Example request in JSON:
(...)
"salessession ":[
{"caixa":1,”opencx”:”Operador 1”,”empid”:125}
]
(...)
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “salessession ”   of type <Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An active salesday was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"salessession ":{"idcx":12,”caixa”:1,"data":"2013-01-01",(...)}
(...)
Action::getOpenSaleSessionInstance
Returns the requested Model Entity instance.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 143/214
Arguments: 
Argument Required Type Description
salessession [caixa] YES integer Teller ID.
salessession [data] YES date Date of the session to be
searched.
Example request in JSON:
(...)
"salessession ":{”caixa”:2,”data”:”2013-01-01”}
(...)
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) The session was successfully closed - an instance is
returned inside the attribute " salessession " of type
<Model Entity> - see entity structure document.
StatusCode::ZSAPI_NO_CONTENT (204) Session not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted into the
database.
Arguments:
Argument Required Type Description
salessession YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) All instances were saved successfully.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 144/214
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Salesstations
Interface responsible for processing all Requests concerning instances of sales stations
(point of sale) - salestation.
Model Entities: SaleStation
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
salestation YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
salestation [codigo] YES integer SaleStation ID.
Example request using JSON:
{
"salestation":[
{"codigo":11},
{"codigo":12}
]
}
Responses: 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 145/214
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “ salestation”   of type Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
salestation [codigo] YES integer SaleStation ID.
Example request using JSON:
{
"salestation":{"codigo":2}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ salestation”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 146/214
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “salestation”   of type Array - see document for
the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"salestation":[
{"codigo":11,"descricao":"Posto 11"},
{"codigo":12,"descricao":"Posto 11"}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
salestation [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“salestation”:{"lastupdate": "2012-01-01 00:01:01.001"}
}

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 147/214
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response  inside the
attribute “salestation”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
salestation [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“salestation”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “salestation”   of type Array - see document for
the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: See information about listings.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 148/214
Action::getInstancesWithSettings
Identical to Action::getInstances - Returns a list (Array) containing all 
instances of the Model Entity, and each instance has the property 
SaleStationSettings populated with an Array  of SaleStationSetting instances -
see the Model Entity Structure of  SaleStationSetting.
Action::getInstanceWithSettings
Identical to Action::getInstance - Returns the Model Entity instance 
requested, with property SaleStationSettings  populated with an Array  of 
SaleStationSetting instances - see the Model Entity Structure of  
SaleStationSetting.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
salestation YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Saleszones
Interface responsible for processing all Requests concerning instances of sales zones -
salezone.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 149/214
Model Entities: Salezone 
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
salezone [codigo] YES integer Sale zone ID.
Example request using JSON:
{
"salezone":{
"codigo": 4,
"descricao": "Zona Interna",
"lastupdate": "2018-10-24 12:42:49.477",
"loja": 6,
"precozona": 0,
"tabelaiva": 0,
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ salezone”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 150/214
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ salezone” of type Array<Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"salezone":[
{"codigo": 3, "descricao": "Interno", ...},
{"codigo": 4, "descricao": "Zona 1",...}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
salezone [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“salezone”:{"lastupdate": "2012-01-01 00:01:01.001"}
}

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 151/214
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “salezone”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
salezone [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“salezone”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “salezone”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 152/214
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
salezone YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Signeddocumentscounts
Interface responsible for processing all Requests concerning instances of  -
signeddocumentscount. Gives information about the number of documents (invoice
documents) that were created using the ZS API. 
Model Entities: Signeddocumentscount
Action::getInstance
Returns an instance of the Model Entity - containing information about the current
number of documents that were created by the API for the year/month the request
is made.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 153/214
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty). 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instance is returned in the Response inside the attribute
“signeddocumentscount”   of type <Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instance of this Model Entity was found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"signeddocumentscount":
{"month": 11, "year": 2018, “invoicedocuments”: 21, “wokingdocuments”: 2, “lastupdate”:
“2018-11-12 15:16:10.087”}
(...)
Interface::Stores 
Interface responsible for processing all Requests concerning instances of: store.
Model Entity: Store
Related Model Entities: StoreSettings 
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 154/214
Argument Required Type Description
store [codigo] YES integer Store ID.
Example request using JSON:
{
"store":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “store”   of type <Model Entity> - see document
for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity.
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 155/214
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “store”   of type Array - see document for the
model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"store":[
{"codigo":1,"descricao":"Loja Amadora”},
{"codigo":2,"descricao":"Loja Braga”}
]
(...)
Note: See information about listings.
Action::getInstanceWithSettings
Returns the instance of the requested Model Entity with the property
StoreSettings populated with an Array of StoreSettings instances- see the
Model Entity Structure of StoreSettings.
Arguments:
Argument Required Type Description
store [codigo] YES integer Store ID.
Example request using JSON:
{
"store":{
"codigo":2
}
}
Responses: 
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 156/214
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “store”   of type <Model Entity> - see document
for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be updated in the
database.
Note: Only the morada (address) and descricao (description) fields can be
changed.
Arguments:
Argument Required Type Description
store YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Subcategories
Interface responsible for processing all Requests concerning instances of  product’s
subcategories - subcategory.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 157/214
Model Entities: Subcategory
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
subcategory YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
subcategory [codigo] YES integer Subcategory ID.
Example request using JSON:
{
"subcategory":[
{"codigo":1},
{"codigo":2}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “subcategory”   of type Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 158/214
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
subcategory [codigo] YES integer Subcategory ID.
Example request using JSON:
{
"subcategory":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ subcategory”   of type <Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 159/214
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “subcategory”   of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"subcategory":[
{"codigo":1,"descricao":"C/ gás",”categoria”: 1,...},
{"codigo":2,"descricao":"S/ gás”, “categoria”: 1,...}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp.
Arguments:
Argument Required Type Description
subcategory [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“subcategory”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 160/214
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “ subcategory”  of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
subcategory [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“subcategory”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “subcategory”   of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 161/214
Arguments:
Argument Required Type Description
subcategory YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Subfamilies 
Interface responsible for processing all Requests concerning instances of product’
subfamilies - subfamilies.
Model Entity: Subfamily 
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
subfamily YES json Array An Array of JSON Object
of type <Model Entity>.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 162/214
Each instance inside the Array must obey the following structure:
subfamily [codigo] YES integer Subfamily ID.
Example request using JSON:
{
"subfamily":[
{"codigo":11},
{"codigo":12}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All instances are returned in the Response  inside the
attribute  “subamily”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only can be removed instances of the Model Entity that are not associated with
transactions.
Action::getInstance
Returns the requested Model Entity instance.
Arguments:
Argument Required Type Description
subfamily [codigo] YES integer Subfamily ID.
Example request using JSON:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 163/214
{
"subfamily":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ subfamily”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “subfamily”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"subfamily":[
{"codigo":1,"descricao":"Entradas”,...]},
{"codigo":2"descricao":"Acompanhamentos”,...}
]
(...)

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 164/214
Note: See information about listings.
Action::getInstancesFromFamily
Returns a list (Array) containing all instances of the SubFamily Entity of a Family.
Arguments:
Argument Required Type Description
subfamily [familia] YES integer Family ID.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “subfamily”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) Não foram encontradas Sub Famílias.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
“subfamily":[
{"codigo":1,"descricao":"Com Gás”,”familia”:1,”fundo”:100,”letra”:1,”posicao”:1},
{"codigo":2,"descricao":"Sem Gás”,”familia”:1,”fundo”:100,”letra”:1,”posicao”:2}
]
}
(...)
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp.
Arguments:
Argument Required Type Description
subfamily [lastupdate] YES datetime Verification Timestamp. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 165/214
Example request using JSON:
{
“subfamily”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “subfamily”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
subfamily [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“subfamily”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “subamily”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 166/214
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"subfamily":[
{"codigo":1,"descricao":"Entradas”,”frontoffice”:1,”posicaofront”:100,”posicaoprint”:1,”fu
ndo”:1,”letra”:1,},
{"codigo":2"descricao":"Acompanhamentos”,”frontoffice”:1,”posicaofront”:102,”posicaop
rint”:12,”fundo”:1,”letra”:1,}
]
(...)
Note: See information about listings.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
subfamily YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Action::setFullSync
Mark all Model Entities to be synchronized. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 167/214
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) In Response, an (empty) instance of type <Model Entity>
inside the attribute “subfamily”.
StatusCode::ZSAPI_NOT_MODIFIED (304) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Suppliers
Interface responsible for processing all Requests concerning instances of supplier.
Model Entities: Supplier 
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
supplier YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
supplier [codigo] YES integer Supplier ID.
Example request using JSON:
{
"supplier":[
{"codigo":11},
{"codigo":12}
]
}

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 168/214
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “ supplier”   of type  Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
supplier [codigo] YES integer Supplier ID.
Example request using JSON:
{
"supplier":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ supplier”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 169/214
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “supplier”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"supplier":[
{"codigo":12,"nome":"André Schneider",”morada”:””,(...)},
{"codigo":11,"nome":"Zone Soft",”morada”:””,(...)}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
supplier [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 170/214
{
“supplier”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “ supplier”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
supplier [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“supplier”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “supplier”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 171/214
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
supplier YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Tablemovements
Interface responsible for processing all Requests concerning instances of  table
movements -  tablemovement.
Model Entities: Tablemovement
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 172/214
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “tablemovement”   of type Array<Model Entity>
- see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"tablemovement":[
{"data":”2015-04-01”, "pessoas": 1,(...)},
{"data":”2015-04-01”,"pessoas": 21,(...)}
]
(...)
Note: See information about listings.
Action::getTableDetails
Returns a list (Array) containing part of the instances of the Model Entity.  
Arguments:
Argument Required Type Description
tablemovement [início ] YES String Start date
tablemovement [fim] YES String End date
Example request using JSON:
{
    "tablemovement": {
"início ":"2014-01-01",
"fim":"2014-01-31"
      }

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 173/214
}
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “tablemovement”   of type Array<Model Entity>
- see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
    "tablemovement": [
        {
          "mesa": "72",
          "lugar": "0",
          "pessoas": "1",
          "country": "PT"
        }
      ] (...)
Interface::Taxes
Interface responsible for processing all Requests concerning instances of taxes - tax.
Model Entities: Tax
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
tax YES Array An Array of JSON Object
of type <Model Entity>.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 174/214
Each instance inside the Array must obey the following structure:
tax [codigo] YES integer Tax ID.
Example request using JSON:
{
"tax":[
{"codigo":11},
{"codigo":12}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All instances are returned in the Response  inside the
attribute  “ tax”  of type Array<Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getActiveInstances
Returns a list (Array) of all active instances. 
Arguments: Optional to use the arguments for the listings. 
Responses:
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 175/214
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ tax”   of type Array<Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"tax":[
{"codigo":1,"descricao":"IVA 23%",”factor”:23,”activa”:1},
{"codigo":3,"descricao":"IVA 5%",”factor”:5,”activa”:1}
]
(...)
Note: See information about listings.
Action::getInstance
Returns the requested Model Entity instance.
Arguments:
Argument Required Type Description
tax [codigo] YES integer Tax ID.
Example request using JSON:
{
"tax":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “tax”   of type <Model Entity> - see document
for the model entity structure.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 176/214
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity.
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ tax”   of type Array<Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"tax":[
{"codigo":1,"descricao":"IVA 23%",”factor”:23,”activa”:1},
{"codigo":2,"descricao":"IVA 16%",”factor”:16,”activa”:0}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 177/214
Argument Required Type Description
tax [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“tax”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response  inside the
attribute   “ tax”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
tax [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“tax”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses:
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 178/214
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ tax”   of type Array  <Model Entity>- see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: See information about listings.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
tax YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Action::setFullSync
Mark all Model Entities to be synchronized. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 179/214
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) In the Response, an empty instance of type <Model
Entity>  inside the attribute “tax”.
StatusCode::ZSAPI_NOT_MODIFIED (304) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::setInstancesAsInactive
Processes an Array of instances of the Model Entity to be marked as inactive.
Arguments:
Argument Required Type Description
tax YES Array An Array of JSON Object
of type <Model Entity>.
Cada instância Tax dentro do Array deve obedecer à seguinte estrutura:
tax [codigo] YES integer Tax ID.
Example request using JSON:
{
"tax":[
{"codigo":11},
{"codigo":12}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) As instâncias do pedido são retornadas na Response
inside the attribute  “ tax”  of type Array<Model Entity> -
see document for the model entity structure.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 180/214
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
Ocorreu um erro ao tentar processar pelo menos uma
das instâncias.
A(s) instância(s) com erro não foi(foram) processada(s).
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Technicalcards
Interface responsible for processing all Requests concerning instances of  product’s
techical cards -  technicalcard.
Model Entities: Technicalcard
Related Model Entities: Technicalcardingredient, Technicalcardpreparation
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
technicalcard YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
technicalcard [codigo] YES integer Technicalcard ID.
Example request using JSON:
{
"technicalcard":[
{"codigo":1},
{"codigo":2}
]
}
Responses: 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 181/214
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “ technicalcard”   of type
Array<Model Entity> - see document for the model entity
structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
technicalcard [codigo] YES integer Technicalcard ID.
Example request using JSON:
{
"technicalcard":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “technicalcard”   of type <Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 182/214
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “technicalcard”  of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"technicalcard":[
{"codigo":1,"empcriacao":1,(...)},
{"codigo":2,"empcriacao":1,(...)}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
technicalcard [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 183/214
{
“technicalcard”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “technicalcard”  of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
technicalcard 
[lastupdate]
YES datetime Verification Timestamp. 
Example request using JSON:
{
“technicalcard”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “technicalcard”   of type Array<Model Entity> -
see document for the model entity structure.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 184/214
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
technicalcard YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Tellers
Interface responsible for processing all Requests concerning instances of tellers - teller.
Model Entities: Teller 
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 185/214
Arguments:
Argument Required Type Description
teller YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
teller [codigo] YES integer Teller ID.
Example request using JSON:
{
"teller":[
{"codigo":1},
{"codigo":2}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “teller”   of type Array<Model Entity>
- see document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 186/214
Arguments:
Argument Required Type Description
teller [codigo] YES integer Teller ID.
Example request using JSON:
{
"teller":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “teller”   of type <Model Entity> - see document
for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ teller”   of type Array<Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 187/214
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"teller":[
{"codigo":1,"descricao":"Caixa 1º",”loja”:1,...},
{"codigo":2,"descricao":"Caixa 2",”loja”:1,...}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
teller [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“teller”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “ teller”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 188/214
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
teller [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“teller”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ teller”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
teller YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 189/214
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Timeregisters
Interface responsible for processing all Requests concerning instances of employees
time register - timeregister.
Model Entities: Timeregister 
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
timeregister [codigo] YES integer Type ID.
Example request using JSON:
{
"timeregister":{
"datahora": “2012-02-27 15:29:57”,
“sentido”: 1,
“empid”: 1
}
}
Responses: 
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 190/214
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ timeregister”   of type <Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “timeregister” of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"timeregister":[
{"datahora": "2012-02-27 15:29:57", "dataval": "2012-02-27", "diasemana": ...},
{"datahora": "2012-02-27 08:29:57", "dataval": "2012-02-27", "diasemana": ...}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 191/214
Argument Required Type Description
timeregister [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“timeregister”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “ timeregister”  of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
timeregister [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“timeregister”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 192/214
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “timeregister”   of type Array<Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Types
Interface responsible for processing all Requests concerning instances of family types -
type.
Model Entities: Type 
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
type YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
type [codigo] YES integer Type ID.
Example request using JSON:
{
"type":[
{"codigo":1},
{"codigo":2}
]
}
Responses: 
Response Code Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 193/214
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “type”   of type Array<Model Entity>
- see document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
type [codigo] YES integer Type ID.
Example request using JSON:
{
"type":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “type”   of type <Model Entity> - see document
for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 194/214
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ type” of type Array<Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"type":[
{"codigo":1,"descricao":"Type 1"},
{"codigo":2,"descricao":"Type 2"}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
type [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“type”:{"lastupdate": "2012-01-01 00:01:01.001"}
}

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 195/214
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “ type”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
type [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“type”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ type”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 196/214
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
type YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Units 
Interface responsible for processing all Requests concerning instances of  products’ units
- unit.
Model Entity: Unit 
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 197/214
unit YES json Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
unit [codigo] YES integer Unit ID.
Example request using JSON:
{
"unit":[
{"codigo":11},
{"codigo":12}
]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All instances are returned in the Response  inside the
attribute  “ unit”   of type Array - see document for the
model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
unit [codigo] YES integer Unit ID.
Example request using JSON:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 198/214
{
"unit":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “unit”   of type <Model Entity> - see document
for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity.
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ unit”   of type Array - see document for the
model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"unit":[
{"codigo":1,"descricao":"Unidade”},
{"codigo":2,"descricao":"Pack 6”}
]
(...)

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 199/214
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
unit [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“unit”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “unit”  of type Array<Model Entity> - consultar
documento sobre estrutura da entidad
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
unit [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 200/214
{
“unit”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ unit”   of type Array - see document for the
model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
unity YES json Array An Array of JSON Object
of type <Model Entity>.
Example request using JSON:
{
     "unit":
           [
             {"codigo":132,"descricao":"NovaUnidade2"},
             {"codigo":131,"descricao":"NovaUnidade1"}
          ]
}
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 201/214
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Action::setFullSync
Mark all instances of the Model Entity to be synchronized.  
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) In the Response, an empty instance of type <Model
Entity>  inside the attribute “unit”.
StatusCode::ZSAPI_NOT_MODIFIED (304) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Versions
Interface responsible for processing all Requests concerning instances of  database
versions - version.
Both for versions of the local DB and the local application, eg: BD 2016.0.0.1.
Model Entities: Version
Action::getInstance
Returns the active Model Entity instance for the store in use. 
Arguments: No arguments.
Responses: 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 202/214
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ version”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Warehouses
Interface responsible for processing all Requests concerning instances of  store’s
warehouses - warehouse.
Model Entities: Warehouse
Action::deleteInstances
Processes an Array of instances of the Model Entity to be removed from the
database.
Arguments:
Argument Required Type Description
warehouse YES Array An Array of JSON Object
of type <Model Entity>.
Each instance inside the Array must obey the following structure:
warehouse [codigo] YES integer Warehouse ID.
Example request using JSON:
{
"warehouse":[
{"codigo":1},
{"codigo":2}
]
}

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 203/214
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) All instances were successfully removed.
All request instances are returned in the Response
inside the attribute  “ warehouse”   of type  Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error while trying to remove at least one of
the instances.
Instance(s) with error have not been removed. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Only instances of the Model Entity that are not associated with transactions can be
removed.
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
warehouse [codigo] YES integer Warehouse ID.
Example request using JSON:
{
"warehouse":{
"codigo":2
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “ warehouse”   of type <Model Entity>  - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 204/214
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstances
Returns a list (Array) containing all instances of the Model Entity. 
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used. 
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “warehouse”   of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
 
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"warehouse":[
{"codigo":1,"descricao":"Geral",...},
{"codigo":2,"descricao":"Cozinha",...}
]
(...)
Note: See information about listings.
Action::getInstancesToDelete
Returns an Array containing all instances of the Model Entity that have been
marked for database removal since the given timestamp
Arguments:
Argument Required Type Description
warehouse [lastupdate] YES datetime Verification Timestamp. 

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 205/214
Example request using JSON:
{
“warehouse”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute  “warehouse”  of type Array<Model Entity> - see
document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of the Model Entity were found - Ensure that
there are records in the database.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::getInstancesToSync
Returns an Array containing all instances of the Model Entity that have changed
at a datetime greater than or equal to the value provided in the request.
Arguments:
Argument Required Type Description
warehouse [lastupdate] YES datetime Verification Timestamp. 
Example request using JSON:
{
“warehouse”:{"lastupdate": "2012-01-01 00:01:01.001"}
}
Note: See information about listings.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “warehouse”   of type Array<Model Entity> - see
document for the model entity structure.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 206/214
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found to
synchronize. 
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Action::saveInstances
Processes an Array of instances of the Model Entity to be inserted/updated in the
database.
Arguments:
Argument Required Type Description
warehouse YES json Array An Array of JSON Object
of type <Model Entity>.
Responses: 
Response Code Description
StatusCode::ZSAPI_CREATED (201) Instances have been successfully processed.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while attempting to write at least one of
the instances.
The instance(s) with error were not saved.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note:  Each instance of the Model Entity to be processed must conform with the Model Entity
structure.
Interface::Workingdocuments
Interface responsible for processing all Requests concerning instances of:
workingdocument.
Access to this interface requires the permission “API working documents” defined in
developer.zonesoft.org
Model Entity: Workingdocument

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 207/214
Related Model Entities: Sale, Delivery
Note: Workingdocument is a specialization of the Model Entity Document for that
reason instances of Workingdocument may exist as instances of Document in responses
from the Interface::Documents.  
Use structure of Document Model Entity as reference.
Supported document types: EC
Action::getInstance
Returns the requested Model Entity instance. 
Arguments:
Argument Required Type Description
workingdocument [doc] YES string(2) The document type ID.
workingdocument [serie] YES string(20) The ID of the document
series.
workingdocument 
[numero]
YES integer The document number in
for given document series.
Example request using JSON:
{
"wokingdocument":{
"numero":"1","doc":"EC","serie":"1L111025"
}
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) The instance is returned in the Response  inside the
attribute  “workingdocument”   of type <Model Entity> -
see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) The requested instance was not found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 208/214
Action::getInstances
Returns a list (Array) of complete instances (with their dependent entities) of the
Model Entity.
Arguments: The presence of a root element containing an instance of the
model_entity is mandatory (even if empty) - optionally, arguments to the listings
can be used.
Responses:
Response Code Description
StatusCode::ZSAPI_OK (200) Instances are returned in the Response inside the
attribute “ workingdocument”   of type Array<Model
Entity> - see document for the model entity structure.
StatusCode::ZSAPI_NO_CONTENT (204) No instances of this Model Entity were found.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Example of response in JSON StatusCode::ZSAPI_OK (200):
(...)
"workingdocument":[
{"numero":"1","doc":"EC","serie":"1L111025"},
{"numero":"122","doc":"EC","serie":"1L111025"}
]
(...)
Note: See information about listings.
Action::saveInstance
Allows to save an instance of the Model Entity, and sign it with a valid certification
key.
If a Delivery instance is set on the workingdocument.delivery property, that information
will be used by our software for delivery management.
Updates are not supported - attempts to save an existing working document will cause a
new working document to be created and returned in the response.

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 209/214
The client at which the document is created for must already exist. If the client does not
exist, the document will be issued to the client with id 0 (zero). 
Note: 
Clients with ids 0 and 1 (zero and one) are reserved by our software applications and will have
predefined workflows and behaviours when processing the document - explanation about
those behaviours fall outside the scope of this document and API’s support channel. Support
requests about those behaviours sent to the API’s support channel will not be processed.
Arguments:
Argument Required Type Description
workingdocument [doc] YES string(2) The document type ID.
(EC)
workingdocument [cliente] YES integer The client ID.
workingdocument 
[ivaincluido]
YES integer This field should always be
1.
workingdocument [delivery] NO | null object A JSON Object  of type
<Delivery> model entity.
workingdocument[emp] NO | 0 integer Operator ID.
workingdocument 
[delivery][morada]
YES string Address
workingdocument 
[delivery][dataentrega]
YES string Delivery date
workingdocument [vendas] YES array Sales lines
workingdocument 
[vendas][codigo]
YES integer Product ID.
workingdocument 
[vendas][qtd]
YES float Product quantity
workingdocument 
[vendas][punit]
YES float Price for Unit of product
workingdocument 
[vendas][desconto]
YES float Discount in value

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 210/214
workingdocument 
[vendas][obs]
NO string Remarks/observations
workingdocument 
[vendas][armazem]
NO | 1 integer Wharehouse ID.
workingdocument 
[levantamento]
NO string Delivery date
Example request using JSON:
{
"workingdocument”: {
"loja": 1,
"doc": "EC",
"cliente": 0,
"pagamento": 1,
"ivaincluido": 1,
"vendas": [{
"codigo": 21,
"qtd": 1,
"punit": 1,
"desconto": 0,
"obs": ""
},
{
"codigo": 10,
"qtd": 1,
"punit": 2,
"desconto": 0.50,
"obs": ""
}],
"delivery":{
"morada": "delivery address",
"dataentrega": "2018-11-01 04:30:01",
"obs": "some extra info",
"contacto": "960960960"
         },
                    "levantamento": "2018-11-01 04:30:01"
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Document has been saved

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 211/214
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
An error occurred while saving the Document.  
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: 
Upon a successful save the working document is returned in the response and it will have a 
new property “pdf” that will contain the url for the document’s pdf file.
The url will be available for 30 days.
Action::setInstanceAsNulled
Allows you to nullify an instance of the Model Entity that has been saved by the
saveInstance method. 
Arguments:
Argument Required Type Description
workingdocument [doc] YES string(2) The document type ID.
(EC)
workingdocument [serie] YES string The ID of the document
series.
workingdocument [numero] YES integer The document number in
for given document series.
workingdocument 
[descanulado]
YES string Reason why document
was nullified.
Example request using JSON:
{
    "workingdocument": {
        "loja": 1,
        "doc": "EC",
        "serie": "AP2017L1",
        "numero": 67,
        "descanulado": "MOTIVO DA ANULAÇÂO"
    }
}

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 212/214
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (200) Invoice Document was nullified 
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
There was an error nullifying the Working Document. 
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Transferdocuments
Action::saveInstance
Allows you to use ZSAPI to create a transfer document (doc type ‘TA’). If the
document is successfully communicated it will be processed to be stored in the
database.
Arguments:
Argument Required Type Description
document YES JSON object A JSON Object instance of
type <EntityModel>.
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (201) The instance was successfully processed. You should
check the response code to act accordingly.
An instance of ATResponse will be returned - you should
see the Model Entity structure for ATResponse.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
The instance received is not valid.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Each instance to be processed must conform to the complete structure of the Model Entity.
Action::cancelInstance

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 213/214
Allows you to use ZSAPI to cancel a transfer document (doc type ‘TA’). If the
document is successfully communicated it will be processed to be stored in the
database.
Arguments:
Argument Required Type Description
transferdocuments[doc] YES string The document type ID.
transferdocuments[serie] YES string The ID of the document series.
transferdocuments[numero] YES integer The document number in for given
document series.
transferdocuments[descanulado] YES string Reason why the document was
nullified.
Example request using JSON:
{
    "transferdocument": {
        "loja": 1,
        "doc": "TA",
        "serie": "AP2024L1I1",
        "numero": 67,
        "descanulado": "MOTIVO DA ANULAÇÂO"
    }
}
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (201) The instance was successfully processed. You should
check the response code to act accordingly.
An instance of ATResponse will be returned - you should
see the Model Entity structure for ATResponse.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
The instance received is not valid.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Interface::Transportdocuments

Zone Soft - 2024 www.zonesoft.pt ZSAPI v3 - Integration Manual, Jan 2024 214/214
Action::saveInstance
Allows you to use ZSAPI to communicate a transport document (doc type ‘GT’)
to the AT. If the document is successfully communicated it will be processed to
be stored in the database.
Arguments:
Argument Required Type Description
document YES JSON object A JSON Object instance of
type <EntityModel>.
Responses: 
Response Code Description
StatusCode::ZSAPI_OK (201) The instance was successfully processed. You should
check the response code to act accordingly.
An instance of ATResponse will be returned - you should
see the Model Entity structure for ATResponse.
StatusCode::ZSAPI_UNPROCESSABLE_ENTITY 
(422)
The instance received is not valid.
You should check the received message.
StatusCode::ZSAPI_BAD_REQUEST (400) Request malformed.
Note: Each instance to be processed must conform to the complete structure of the Model Entity.