# IntegrationManagementPlatformManual.pdf

 
 
Zone Soft – Integration and Management Platform 
Page 0 de 24 
Last update 27/05/2024 
  
  
MANUAL 
ZS ROI / ZS API 
Integration and 
Management Platform 

 
 
Zone Soft – Integration and Management Platform 
Page 1 de 24 
Last update 27/05/2024 
 
Important Notes for ZS ROI: 
 
1ª. In order to be able to integrate into Zone Soft's Integration Management Platform, 
there must already be an active ZS Rest license 
 
2ª. The activation of the ZSAPIFood (Developer) module in the ZS Lic License Management 
application must be requested for the ZS Rest license to be integrated 
 
3ª. Only after the ZS Rest license request and the activation of the ZSAPIFood module , 
should the Developer request the license activation in the Integration Management 
Platform 
 
  

 
 
Zone Soft – Integration and Management Platform 
Page 2 de 24 
Last update 27/05/2024 
 
ÍNDEX 
Important Notes for ZS ROI: ................................................................................................................................ 1 
Image Index ......................................................................................................................................................... 3 
1 – Platform integration management Zone Soft ................................................................................................. 4 
1.1 – Registration of a new user .......................................................................................................................... 4 
2 – Login .............................................................................................................................................................. 9 
2.1 – New integration into the integration management platform ...................................................................... 10 
2.2 – Associate Zone Soft client to be integrated into the application ............................................................... 12 
2.2.1 - Enable or disable Client ID status ................................ ................................ ................. 15 
3 – New INTEGRATOR API Integration ............................................................................................................ 18 
 
 
 
  

 
 
Zone Soft – Integration and Management Platform 
Page 3 de 24 
Last update 27/05/2024 
Image Index 
Figure 1 – Access the website of the Zone Soft integration management platform ............................................ 4 
Figure 2 – New user registration ......................................................................................................................... 5 
Figure 3 – Successful registration ....................................................................................................................... 6 
Figure 4 – Finalize account activation and registration ....................................................................................... 7 
Figure 5 – Confirmation that the account is active .............................................................................................. 8 
Figure 6 – Login to the Zone Soft's integration management platform ............................................................... 9 
Figure 7 – My profile and select new integration ............................................................................................... 10 
Figure 8 – New integration into the integration management platform ............................................................. 10 
Figure 9 – Validation of the new integration into the platform by Zona Soft ...................................................... 11 
Figure 10 – Integration of new customer into the platform ................................................................................ 12 
Figure 11 – New customer onboarding ............................................................................................................. 12 
Figure 12 – Email for integration authorization. ................................................................................................. 13 
Figure 13 – Activation of the store interaction done successfully. .................................................................... 14 
Figure 14 – Enable or disable Store Id/Customer Id status .............................................................................. 15 
Figure 15 – Change of status. ........................................................................................................................... 16 
Figure 16 – Active Store ID Status .................................................................................................................... 16 
Figure 17 – Select New Integration ................................................................................................................... 18 
Figure 18 – Fill in data from the new integration ............................................................................................... 18 
Figure 19 – Activate the account according to the email received .................................................................... 19 
Figure 20 – Create new customer ..................................................................................................................... 20 
Figure 21 – Fill in the information for the new customer ................................................................................... 20 
Figure 22 – API not yet processed/activated by the Zone Soft team ................................................................ 21 
Figure 23 – API already activated by the Zone Soft team ................................................................................. 22 
Figure 24 - API activation, confirmation email ................................................................................................... 23 
  

 
 
Zone Soft – Integration and Management Platform 
Page 4 de 24 
Last update 27/05/2024 
1 – Platform integration management Zone Soft 
• The integrator platform, aimed at Zone Soft partners who want to integrate their services using 
the API to send requests directly to the POS, aims to define the Endpoints that integrators should 
use. 
• These Endpoints must be in accordance with the documentation available here: 
https://drive.google.com/drive/folders/1_Tli4QEEtNDN8h_uAoqqLnxSztsfX8Vf 
 
1.1 – Registration of a new user 
To register a new user in the Integration Management Platform of Zone Soft, you should access the 
website at: https://developer.zonesoft.org/login. 
1 – Click on Register new user. The user will be redirected to the registration page. 
Important Notes:  
1st – The integration applications will always be associated with the registered account. 
2nd – Notifications will always be sent to the registered e -mail address; it is not mandatory, but we 
advise that it is a general use e-mail. 
3rd – It is not possible to change or change the properties of the applications for another user.   
Figure 1 – Access the website of the Zone Soft integration management platform 


 
 
Zone Soft – Integration and Management Platform 
Page 5 de 24 
Last update 27/05/2024 
In the new user registration window: 
1 – In the Name field, enter the name that identifies the user. 
2 – In the Company field, enter the name of the company. 
3 – In the Email field, enter the valid email address, which will serve as access to the platform. 
4 – In the Phone Number field, you must enter a phone number of the company or user. 
5 – In the Option field, you must select the type of partnership you have with Zone Soft. 
6 – In the Country field, select the corresponding country. 
Figure 2 – New user registration 


 
 
Zone Soft – Integration and Management Platform 
Page 6 de 24 
Last update 27/05/2024 
7 – In the Password field, enter a secure password that will always be required to access Zone 
Soft's integration management platform, and, re-enter the password placed in the previous 
field to validate the information in the Confirm Password field. 
8 – Select the I agree to the term’s checkbox, the user of Zone Soft's integration management 
platform should read the terms of access. 
9 – Select the Register button. 
A window will appear with the information that the registration was successful. 
 
 
  
Figure 3 – Successful registration 

 
 
Zone Soft – Integration and Management Platform 
Page 7 de 24 
Last update 27/05/2024 
The user will receive email, to confirm and complete the registration process on Zone Soft integration 
management platform. 
 
10 – In the email received, the user must click on the word here, present in the body of the text. 
The system displays a new window, where it informs the user that the previously registered account 
has been successfully activated.  
 
 
Figure 4 – Finalize account activation and registration 


 
 
Zone Soft – Integration and Management Platform 
Page 8 de 24 
Last update 27/05/2024 
 
     
Figure 5 – Confirmation that the account is active 

 
 
Zone Soft – Integration and Management Platform 
Page 9 de 24 
Last update 27/05/2024 
2 – Login 
For the user to access the Integration Management Platform of Zone Soft, in a web browser you must 
enter the https://developer.zonesoft.org/login, enter the email and password corresponding to 
numbers 3 and 7 of the previous point. 
When the first time you log in and there are no active integrations yet, the user/integrator's profile is 
displayed. 
 
Note: In the expression I want to set a new password, the user can change the password to 
access/login to Zone Soft integration management platform.    
Figure 6 – Login to the Zone Soft's integration management platform 


 
 
Zone Soft – Integration and Management Platform 
Page 10 de 24 
Last update 27/05/2024 
2.1 – New integration into the integration management platform 
For the user to make a new integration on the platform, in the initial window of Developer – API Zone 
Soft, select New Integration.  
1 – Select the new integration botton. 
1 – In the Name field, enter an ID of the new integration. 
2 – In the Description field, insert a brief description of what you want to do in this new 
integration. 
3 – In the API field, select the Zone Soft API you want to integrate. 
4 – Select the Save button. 
Figure 8 – New integration into the integration management platform 
Figure 7 – My profile and select new integration 


 
 
Zone Soft – Integration and Management Platform 
Page 11 de 24 
Last update 27/05/2024 
After entering the data to the new integration, in the integration management platform, the user must 
wait for Zone Soft's validation for this new integration. 
        
Figure 9 – Validation of the new integration into the platform by Zona Soft 


 
 
Zone Soft – Integration and Management Platform 
Page 12 de 24 
Last update 27/05/2024 
2.2 – Associate1 Zone Soft client to be integrated into the application 
After the new integration is approved by Zone Soft, a new client can be created to be integrated, in 
Zone Soft integration management platform, select New Client. 
In the window New Client, the user must fill in the identifying fields of the store: 
1 – In the Client Serial field, the software license number/code must be insert. 
2 – In the Permissions field, select the permission you want to integrate. 
 
1 Important note: The client to be integrated must have an active license of the ZS Rest software 
Figure 10 – Integration of new customer into the platform 
Figure 11 – New customer onboarding 


 
 
Zone Soft – Integration and Management Platform 
Page 13 de 24 
Last update 27/05/2024 
3 – In the fields Endpoint login, Endpoint menu, Endpoint order and Endpoint pos, 
the information of the links must be inserted with the indication of each of the Enpoints 2. 
4 – In the Store ID field, you must select the store number referring to the license that will be 
associated with the new integration. 
5 – Select the Check Box, I agree to the terms. 
6 – Select the Save button. 
At this stage, a communication will be sent via email to the customer, so that they can authorize and 
finalize the process of integrating their store into Zone Soft's integration management platform. 
 
2 Endereço HTTPS. 
Figure 12 – Email for integration authorization. 


 
 
Zone Soft – Integration and Management Platform 
Page 14 de 24 
Last update 27/05/2024 
7 – The customer must click on the expression Authorize this integration, present in the body of 
the text of the email, to finalize the integration in the integration management platform.  
 
 
  
Figure 13 – Activation of the store interaction done successfully. 

 
 
Zone Soft – Integration and Management Platform 
Page 15 de 24 
Last update 27/05/2024 
2.2.1 - Enable or disable Client ID status 
In the Developer window, select the Save botton. 
8 – In the Developer – API Zone Soft window, the Your Status is Pending 3, to switch to Active you 
must select the Save button to start the status change. 
  
 
3 Pending, inactive or suspended state. 
Figure 14 – Enable or disable Store Id/Customer Id status 


 
 
Zone Soft – Integration and Management Platform 
Page 16 de 24 
Last update 27/05/2024 
9 – In the checkbox Your Status, you must select Active.  
10 – Select the Save button.  
Figure 15 – Change of status. 
Figure 16 – Active Store ID Status 


 
 
Zone Soft – Integration and Management Platform 
Page 17 de 24 
Last update 27/05/2024 
Important Notes:  
4th – To move a store from Active to Pending, perform point 8, 9 and 10, selected in point 9 the 
Pending. 
5th – An email will sent informing you, that the store status has changed. 
 
• License – Identifies whether the store's license is active. 
• Your Status – Informs the administrator/integrator account, if the integration is completed on 
the platform and active. 
• Client Status – This field informs that the customer has received, in the email associated with 
their license, the finalization process for activating the store on the integration management 
platform and activated it. 
• Zone Soft Status – It will become Active when the API team accepts the integration request in 
Zone Soft integration management platform. 
 
 
 
  

 
 
Zone Soft – Integration and Management Platform 
Page 18 de 24 
Last update 27/05/2024 
3 – New INTEGRATOR API Integration 
In the main Developer – Zone Soft API window, you must: 
1 – Select the New Integration.  
2 – Enter the ID of the new API integration.  
3 – In the API checkbox, choose the API Integrator option. 
4 – Enter the description for which the new integration will be used. 
Figure 17 – Select New Integration 
Figure 18 – Fill in data from the new integration 


 
 
Zone Soft – Integration and Management Platform 
Page 19 de 24 
Last update 27/05/2024 
5 – Press the Save button. 
6 – After saving the new integration, the user will receive an email where they must select the 
button Here, To confirm your account.  
 
  
Figure 19 – Activate the account according to the email received 


 
 
Zone Soft – Integration and Management Platform 
Page 20 de 24 
Last update 27/05/2024 
7 – Select the function New Client.  
 
In the New Client window.  
8 – In the Client Serial field, enter the license code to be associated with the API integration. 
9 – In  the Store ID field, the user must insert/define the store number associated with the license 
and associate the API. 
10 – In the Permissions Selection box, the user must select: 
10.1 – API Access, this option allows access to all APIs, except for the Working documents 
and Invoice documents API. 
10.2 – API Working documents, by selecting this option adds this API option to the API's that 
will give you access to the interface of the ordering documents. 
Figure 21 – Fill in the information for the new customer 
Figure 20 – Create new customer 


 
 
Zone Soft – Integration and Management Platform 
Page 21 de 24 
Last update 27/05/2024 
10.3 – API Invoice documents, by selecting this option adds this API option to the API's that 
will give you access to the interface of the invoice documents. 
10.4 – API and Movement of goods, allows you to make documents of the transport type 
(Waybill), it also allows you to make documents of the TA type (Warehouse Transfer). 
10.5 – API and Access to all documents interface, the user will add access to all APIs. 
Note: The user should check the information regarding the Endpoints in the manual for the 
purpose in this latest version to be made available by the ZS API team. 
11 – The user must read the Terms and if he agrees select the Check Box I agree to the terms. 
12 – Press the Save button. 
Note: An email will always send to informing the status change. 
• Client Serial and Store ID – Identifies the license and store to activate.  
• Your Status – Informs if the administrator/integrator account has the integration with the store 
active or suspended. 
• Client Status – This field informs that the customer has received, in the email associated with 
their license, the finalization process for activating the store on the integration management 
platform and activated it. 
• Zone Soft Status – It will become Active when the API team accepts the integration request in 
Zone Soft integration management platform.  
Figure 22 – API not yet processed/activated by the Zone Soft team 


 
 
Zone Soft – Integration and Management Platform 
Page 22 de 24 
Last update 27/05/2024 
 
 
Figure 23 – API already activated by the Zone Soft team 


 
 
Zone Soft – Integration and Management Platform 
Page 23 de 24 
Last update 27/05/2024 
  
 
 
  
Figure 24 - API activation, confirmation email 


 
 
Zone Soft – Integration and Management Platform 
Page 24 de 24 
Last update 27/05/2024 
(+351) 249 717 997 
seg. a sex. (9h-18h) 
 
Estrada Nacional 3 
Zona Industrial Lote I-21 
2330-210 Entroncamento, Santarém 
comercial@zonesoft.org 
suporte@zonesoft.org 
geral@zonesoft.org 
 
 
 
 