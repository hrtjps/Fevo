import React from "react";

import { connect } from "react-redux";
import "./TermsPage.scss";
import { dataSelector } from "../modules/app";

const PrivacyPage = () => {
  return (
    <>
      <section className="terms-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="term-title">
                <h1>FEVO Privacy Policy</h1>
              </div>
            </div>
            <div className="col-md-8 offset-0 offset-md-2">
              <div className="terms-text">
                <p>
                  This Privacy Policy describes the policies and procedures of
                  Fevo, Inc. (“Fevo”, “we”, “our” or “us”) on the collection,
                  use and disclosure of your information on www.fevo.com (the
                  “Site”) and the services, features, content or applications we
                  offer (collectively with the Site, the “Services”). When you
                  use the Services, you are consenting to the collection, use,
                  transfer, storage, disclosure and other uses of your
                  information as described in this Privacy Policy.
                </p>
                <h2>What Does This Privacy Policy Cover?</h2>
                <p>
                  This Privacy Policy covers the treatment of personal
                  information gathered when you are using or accessing the
                  Services. This Privacy Policy also covers our treatment of any
                  personal information that our business partners share with us
                  or that we share with our business partners.
                </p>
                <p>
                  This Privacy Policy does not apply to the practices of third
                  parties that we do not own or control, including but not
                  limited to: any third-party websites, services and
                  applications that you access through the Services, including
                  event provider websites, services, applications and employees.
                  While we attempt to facilitate access only to those
                  third-party services that share our respect for your privacy,
                  we cannot take responsibility for the content or privacy
                  policies of those third-party services. We encourage you to
                  carefully review the privacy policies of any third-party
                  services you access.
                </p>
                <h2>What Information Does FEVO Collect?</h2>
                <p>
                  The information we gather enables us to personalize, improve
                  and continue to operate the Services. In connection with
                  certain aspects of the Services, we may request, collect
                  and/or display some of your personal information. We collect
                  the following types of information from our users.
                </p>
                <h3>Account Information</h3>
                <p>
                  When you create an Account or purchase from us, including via
                  third-party websites or applications, such as event provider
                  website or applications, you will provide information such as
                  your name, email address, phone number, address, payment
                  information, and/or password. We may also ask for demographic
                  information or other information relevant to the event or
                  prizes that the event provider may provide.
                </p>
                <h3>Your Communications with Us</h3>
                <p>
                  We collect personal information from you such as email
                  address, phone number, or mailing address when you request
                  information about our Services, register for our marketing
                  communications or loyalty program, request customer or
                  technical support, apply for a job or otherwise communicate
                  with us.
                </p>
                <h3>Surveys</h3>
                <p>
                  We may contact you to participate in surveys. If you decide to
                  participate, you may be asked to provide certain information
                  which may include personal information.
                </p>
                <h3>Social Media Content</h3>
                <p>
                  We may offer forums, blogs, or social media pages. Any content
                  you provide on these channels will be considered “public” and
                  is not subject to privacy protections.
                </p>
                <h3>Sweepstakes or Contests</h3>
                <p>
                  We may run sweepstakes and contests. Contact information you
                  provide may be used to reach you about the sweepstakes or
                  contest and for other promotional, marketing and business
                  purposes, if permitted by law. In some jurisdictions, we are
                  required to publicly share personal information of winners.
                </p>
                <h3>User Content</h3>
                <p>
                  Some features of the Services may allow you to provide content
                  to the Services. All content submitted by you to the Services
                  may be retained by us indefinitely, even after you terminate
                  your account. We may continue to disclose such content to
                  third parties in a manner that does not reveal personal
                  information, as described in this Privacy Policy.
                </p>
                <h3>Location Information</h3>
                <p>
                  Some of our Services may include features based on users’
                  actual locations and may report users’ current locations
                  (“Location-Based Services”). To the extent you voluntarily opt
                  to use any Location-Based Services, we will collect and store
                  information about your location at the time you use those
                  Location-Based Services. This information can come from a
                  variety of sources depending on the client you use to access
                  the Services; for example, a mobile phone may report its GPS
                  location or IP address at the time Location-Based Services are
                  used. You can opt out of Located-Based Services by changing
                  the settings on your device.
                </p>
                <h3>Financial Information</h3>
                <p>
                  If you make purchases through the Services, your financial
                  information, such as your payment method (valid credit card
                  number, type, expiration date or other financial information),
                  is collected and stored by our third party payment processing
                  company (the “Payment Processor"), and use and storage of that
                  information is governed by the Payment Processor's applicable
                  terms of service and privacy policy. We currently use Stripe
                  as our Payment Processor (www.stripe.com). In order to
                  facilitate your order transactions, we collect and store your
                  billing zip code, credit card type and the last four digits of
                  your credit card number, but no other financial information.
                </p>
                <h3>Shipping Information</h3>
                <p>
                  We may collect your shipping information in connection with
                  certain purchases through the Services. We may pass this
                  information to our Payment Processor, event providers,
                  partners and Agents for purposes of customer service,
                  fulfillment, shipping and returns. The use of your personal
                  information by such parties is subject to their respective
                  privacy policies.
                </p>
                <h3>
                  IP Address Information and Other Information Collected
                  Automatically
                </h3>
                <p>
                  We automatically receive and record information from your web
                  browser or device when you interact with the Services,
                  including your IP address, user settings, MAC address, cookie
                  identifiers, mobile carrier, mobile advertising and other
                  unique identifiers, details about your browser, operating
                  system or device, location information, Internet service
                  provider, pages that you visit before, during and after using
                  the Services, information about the links you click, and other
                  information about how you use the Services. Information we
                  collect may be associated with accounts and other devices.
                </p>
                <p>
                  Generally, the Services automatically collect usage
                  information, such as the number and frequency of visitors to
                  the Site. We may use this data in aggregate form, that is, as
                  a statistical measure, but not in a manner that would identify
                  you personally. This type of aggregate data enables us and
                  third parties authorized by us to figure out how often
                  individuals use parts of the Services so that we can analyze
                  and improve them.
                </p>
                <h3>
                  Cookies, Pixel Tags/Web Beacons, Analytics Information, and
                  Interest-Based Advertising Technologies
                </h3>
                <p>
                  We, as well as third parties that provide content,
                  advertising, or other functionality on the Services, may use
                  cookies, pixel tags, local storage, and other technologies
                  (“Technologies”) to automatically collect information through
                  the Services. Technologies are essentially small data files
                  placed on your computer, tablet, mobile phone, or other
                  devices that allow us and our partners to record certain
                  pieces of information whenever you visit or interact with our
                  Services. When you create an Account, you will provide
                  information that could be Personal Information, such as your
                  name, password and email address. You acknowledge that this
                  information may be personal to you, and by creating an account
                  on the Services and providing Personal Information to us, you
                  allow others, including us, to identify you and therefore may
                  not be anonymous. We may use your contact information to send
                  you information about our Services. You may unsubscribe from
                  these messages through your Account settings, although we,
                  regardless, reserve the right to contact you when we believe
                  it is necessary, such as for account recovery purposes. If you
                  access the Services through your Facebook ID, you are allowing
                  the Services to access your information, such as your Facebook
                  account profile picture. We will use all information available
                  that we may receive through your Facebook account in
                  accordance with Facebook's policies and your account privacy
                  settings selected through Facebook, so please review such
                  policies and settings.
                </p>
                <ul>
                  <li>
                    <strong>Cookies. </strong>
                    Cookies are small text files placed in visitors’ computer
                    browsers to store their preferences. Most browsers allow you
                    to block and delete cookies. However, if you do that, the
                    Services may not work properly.
                  </li>
                  <li>
                    <strong>Pixel Tags/Web Beacons.</strong> A pixel tag (also
                    known as a web beacon) is a piece of code embedded in the
                    Services that collects information about users’ engagement
                    on that web page. The use of a pixel allows us to record,
                    for example, that a user has visited a particular web page
                    or clicked on a particular advertisement.
                  </li>
                </ul>
                <h3>Analytics</h3>
                <p>
                  We may also use Google Analytics and other service providers
                  to collect information regarding visitor behavior and visitor
                  demographics on our Services. For more information about
                  Google Analytics, please visit
                  www.google.com/policies/privacy/partners/. You can opt out of
                  Google’s collection and processing of data generated by your
                  use of the Services by going to
                  http://tools.google.com/dlpage/gaoptout.
                </p>
                <h3>Information from Other Sources</h3>
                <p>
                  We may obtain information about you from other sources,
                  including through third party services and organizations to
                  supplement information provided by you.
                </p>
                <p>
                  If you access our Services through a third-party website or
                  application, such as an event provider, app store, a
                  third-party login service, or a social networking site, we may
                  collect information about you from that third party.
                  Information we collect through these services may include your
                  name, your user identification number, your user name,
                  location, gender, birth date, email, profile picture, and your
                  contacts stored in that service. This supplemental information
                  allows us to verify information that you have provided to us
                  and to enhance our ability to provide you with information
                  about our business, products, and Services.
                </p>
                <h3>Aggregate Information</h3>
                <p>
                  We collect statistical information about how both unregistered
                  and registered users, collectively, use the Services
                  (“Aggregate Information”). Some of this information is derived
                  from personal information. This statistical information is not
                  personal information and cannot be tied back to you, your
                  Account or your web browser.
                </p>
                <h2>How Will My Information Be Used?</h2>
                <p>
                  We use your information for a variety of business purposes,
                  including to:
                </p>
                <h3>
                  Fulfil our contract with you and provide you with our
                  Services, such as:
                </h3>
                <ul>
                  <li>Managing your information and accounts;</li>
                  <li>
                    Providing access to certain areas, functionalities, and
                    features of our Services;
                  </li>
                  <li>
                    Communicating with you about your account, activities on our
                    Services and policy changes;
                  </li>
                  <li>
                    Undertaking activities to verify or maintain the quality or
                    safety of a service or device;
                  </li>
                  <li>
                    Processing your financial information and other payment
                    methods for products or Services purchased;
                  </li>
                  <li>
                    Providing advertising, analytics and marketing services;
                  </li>
                  <li>
                    Providing Services on behalf of our customers, such as
                    maintaining or servicing accounts, providing customer
                    service, and verifying customer information;
                  </li>
                  <li>Processing applications and transactions; and</li>
                  <li>Allowing you to register for events.</li>
                </ul>
                <h3>
                  Analyze and improve our Services pursuant to our legitimate
                  interest, such as:
                </h3>
                <ul>
                  <li>
                    Detecting security incidents, protecting against malicious,
                    deceptive, fraudulent or illegal activity, and prosecuting
                    those responsible for that activity;
                  </li>
                  <li>
                    Measuring interest and engagement in our Services and
                    short-term, transient use, such as contextual customization
                    of ads;
                  </li>
                  <li>
                    Undertaking research for technological development and
                    demonstration;
                  </li>
                  <li>
                    Researching and developing products, services, marketing or
                    security procedures to improve their performance,
                    resilience, reliability or efficiency;
                  </li>
                  <li>
                    Improving, upgrading or enhancing our Services or device [or
                    those of our Providers];
                  </li>
                  <li>Developing new products and Services;</li>
                  <li>Ensuring internal quality control;</li>
                  <li>Verifying your identity and preventing fraud;</li>
                  <li>
                    Debugging to identify and repair errors that impair existing
                    intended functionality;
                  </li>
                  <li>Enforcing our terms and policies; and</li>
                  <li>
                    Complying with our legal obligations, protecting your vital
                    interest, or as may be required for the public good.
                  </li>
                </ul>
                <h3>
                  Provide you with additional content and Services, such as:
                </h3>
                <ul>
                  <li>
                    Furnishing you with customized materials about offers,
                    products, and Services that may be of interest, including
                    new content or Services;
                  </li>
                  <li>
                    Auditing relating to interactions, transactions and other
                    compliance activities; and
                  </li>
                  <li>
                    Other purposes you consent to, are notified of, or are
                    disclosed when you provide personal information.
                  </li>
                </ul>
                <p>
                  <b>Use De-identified and Aggregated Information.</b> We may
                  use personal information and other data about you to create
                  de-identified and aggregated information, such as
                  de-identified demographic information, de-identified location
                  information, information about the computer or device from
                  which you access our Services, or other analyses we create.
                </p>
                <p>
                  <b>Share Content with Friends or Colleagues.</b> Our Services
                  may offer various tools and functionalities. For example, we
                  may allow you to provide information about your friends
                  through our referral services. Our referral services may allow
                  you to forward or share certain content with a friend or
                  colleague, such as an email inviting your friend to use our
                  Services.
                </p>
                <p>
                  <b>
                    Process Information on Behalf of Our Customers (as
                    processors).
                  </b>{" "}
                  Our customers may choose to use our Services to process
                  certain data of their own, which may contain personal
                  information. The data that we process through our Services is
                  processed by us on behalf of our customer, and our privacy
                  practices will be governed by the contracts that we have in
                  place with our customers, not this Privacy Policy.
                </p>
                <p>
                  If you have any questions or concerns about how such data is
                  handled or would like to exercise your rights, you should
                  contact the person or entity (i.e., the data controller) who
                  has contracted with us to use the Service to process this
                  data. Our customers control the personal information in these
                  cases and determine the security settings within the account,
                  its access controls and credentials. We will, however, provide
                  assistance to our customers to address any concerns you may
                  have, in accordance with the terms of our contract with them.
                  For a list of our sub-processors, contact us as described
                  below.
                </p>
                <p>
                  <b>How We Use Automatic Collection Technologies.</b> We, as
                  well as third parties that provide content, advertising, or
                  other functionality on the Services, may use cookies, pixel
                  tags, local storage, and other technologies to automatically
                  collect information through the Services. Our uses of these
                  Technologies fall into the following general categories:
                </p>
                <ul>
                  <li>
                    Operationally Necessary. This includes Technologies that
                    allow you access to our Services, applications, and tools
                    that are required to identify irregular site behavior,
                    prevent fraudulent activity and improve security or that
                    allow you to make use of our functionality;
                  </li>
                  <li>
                    Performance Related. We may use Technologies to assess the
                    performance of our Services, including as part of our
                    analytic practices to help us understand how our visitors
                    use the Services;
                  </li>
                  <li>
                    Functionality Related. We may use Technologies that allow us
                    to offer you enhanced functionality when accessing or using
                    our Services. This may include identifying you when you sign
                    into our Services or keeping track of your specified
                    preferences, interests, or past items viewed;
                  </li>
                  <li>
                    Advertising or Targeting Related. We may use first party or
                    third-party Technologies to deliver content, including ads
                    relevant to your interests, on our Services or on third
                    party sites.
                  </li>
                </ul>
                <p>
                  <b>Cross-Device Tracking.</b> Your browsing activity may be
                  tracked across different websites and different devices or
                  apps. For example, we may attempt to match your browsing
                  activity on your mobile device with your browsing activity on
                  your laptop. To do this our technology partners may share
                  data, such as your browsing patterns, geo-location and device
                  identifiers, and will match the information of the browser and
                  devices that appear to be used by the same person.
                </p>
                <p>
                  <b>
                    Notice Regarding Third Party Websites, Social Media
                    Platforms and Software Development Kits.
                  </b>{" "}
                  The Services may contain links to other websites, and other
                  websites may reference or link to our website or other
                  Services. These other websites are not controlled by us. We
                  encourage our users to read the privacy policies of each
                  website and application with which they interact. We do not
                  endorse, screen or approve and are not responsible for the
                  privacy practices or content of such other websites or
                  applications. Visiting these other websites or applications is
                  at your own risk.
                </p>
                <p>
                  Our Services may include publicly accessible blogs, forums,
                  social media pages, and private messaging features. By using
                  such Services, you assume the risk that the personal
                  information provided by you may be viewed and used by third
                  parties for any number of purposes. In addition, social media
                  buttons such as Facebook, Twitter, Instagram, and LinkedIn
                  (that might include widgets such as the “share this” button or
                  other interactive mini-programs) may be on our site. These
                  features may collect your IP address, which page you are
                  visiting on our site, and may set a cookie to enable the
                  feature to function properly. These social media features are
                  either hosted by a third party or hosted directly on our site.
                  Your interactions with these features apart from your visit to
                  our site are governed by the privacy policy of the company
                  providing it.
                </p>
                <p>
                  We may use third party APIs and software development kits
                  (“SDKs”) as part of the functionality of our Services. APIs
                  and SDKs may allow third parties including analytics and
                  advertising partners to collect your personal information for
                  various purposes including to provide analytics services and
                  content that is more relevant to you. For more information
                  about our use of APIs and SDKs, please contact us as set forth
                  below.
                </p>
                <h2>How, and With Whom, Is Your Information Shared?</h2>
                <p>
                  Certain of the Services are designed to help you share
                  information with others. As a result, some of the information
                  generated through the Services is shared publicly or with
                  third parties. Except as provided below, we do not share your
                  personal information.
                </p>
                <p>
                  We have not sold information about consumers for valuable
                  consideration in the last 12 months.
                </p>
                <p>
                  <b>Service Providers.</b> We may share any personal
                  information we collect about you with our third-party service
                  providers. The categories of service providers (processors) to
                  whom we entrust personal information include: IT and related
                  services; payment processors; customer service providers; and
                  vendors to support the provision and promotion of the
                  Services.
                </p>
                <p>
                  <b>Business Partners.</b> We may provide personal information
                  to business partners with whom we jointly offer products or
                  services, including third-party websites and applications,
                  such as event providers. In such cases, our business partner’s
                  name will appear along with ours.
                </p>
                <p>
                  <b>Affiliates.</b> We may share personal information with our
                  affiliated companies.
                </p>
                <p>
                  <b>Advertising Partners.</b> Through our Services, we may
                  allow third party advertising partners to set technologies and
                  other tracking tools to collect information regarding your
                  activities and your device (e.g., your IP address, mobile
                  identifiers, page(s) visited, location, time of day). We may
                  also combine and share such information and other information
                  (such as demographic information and past purchase history)
                  with third party advertising partners. These advertising
                  partners may use this information (and similar information
                  collected from other websites) for purposes of delivering
                  targeted advertisements to you when you visit third party
                  websites within their networks. This practice is commonly
                  referred to as “interest-based advertising” or “online
                  behavioral advertising. We may allow access to other data
                  collected by the Services to share information that may be
                  useful, relevant, valuable or otherwise of interest to you. If
                  you prefer not to share your personal information with third
                  party advertising partners, you may follow the instructions
                  below.
                </p>
                <p>
                  <b>Disclosures to Protect Us or Others.</b> We may access,
                  preserve, and disclose any information we store associated
                  with you to external parties if we, in good faith, believe
                  doing so is required or appropriate to: comply with law
                  enforcement or national security requests and legal process,
                  such as a court order or subpoena; protect your, our or
                  others’ rights, property, or safety; enforce our policies or
                  contracts; collect amounts owed to us; or assist with an
                  investigation or prosecution of suspected or actual illegal
                  activity.
                </p>
                <p>
                  <b>
                    Disclosure in the Event of Merger, Sale, or Other Asset
                    Transfers.
                  </b>{" "}
                  If we are involved in a merger, acquisition, financing due
                  diligence, reorganization, bankruptcy, receivership, purchase
                  or sale of assets, or transition of service to another
                  provider, then your information may be sold or transferred as
                  part of such a transaction, as permitted by law and/or
                  contract.
                </p>
                <p>
                  <b>International Data Transfers.</b> You agree that all
                  information processed by us may be transferred, processed, and
                  stored anywhere in the world, including but not limited to,
                  the United States or other countries, which may have data
                  protection laws that are different from the laws where you
                  live. We have taken appropriate safeguards to require that
                  your personal information will remain protected and require
                  our third-party service providers and partners to have
                  appropriate safeguards as well. Further details can be
                  provided upon request.
                </p>
                <h2>Is Information About Me Secure?</h2>
                <p>
                  We take steps to ensure that your information is treated
                  securely and in accordance with this Privacy Policy.
                  Unfortunately, no system is 100% secure, and we cannot ensure
                  or warrant the security of any information you provide to us.
                  To the fullest extent permitted by applicable law, we do not
                  accept liability for unintentional disclosure.
                </p>
                <p>
                  By using the Services or providing personal information to us,
                  you agree that we may communicate with you electronically
                  regarding security, privacy, and administrative issues
                  relating to your use of the Services. If we learn of a
                  security system’s breach, we may attempt to notify you
                  electronically by posting a notice on the Services, by mail or
                  by sending an e-mail to you.
                </p>
                <h2>What Are My Rights and Choices?</h2>
                <p>You have certain choices about your personal information.</p>
                <p>
                  You can use some of the features of the Services without
                  registering, thereby limiting the type of information that we
                  collect. You can always opt not to disclose certain
                  information to us, even though it may be needed to take
                  advantage of some of our features.
                </p>
                <p>
                  <b>Account Deactivation.</b> Should you ever decide to
                  deactivate your Account, you may do so by emailing
                  support@fevo.com or otherwise through the Services. If you
                  deactivate your Account, any association between your Account
                  and information we store will no longer be accessible through
                  your Account. However, given the nature of sharing on the
                  Services, any public activity on your Account prior to
                  deactivation will remain stored on our servers and will remain
                  accessible to the public in accordance with applicable law.
                </p>
                <p>
                  <b>Email and Telephone Communications.</b> If you receive an
                  unwanted email from us, you can use the unsubscribe link found
                  at the bottom of the email to opt out of receiving future
                  emails. Note that you will continue to receive
                  transaction-related emails regarding products or Services you
                  have requested. We may also send you certain non-promotional
                  communications regarding us and our Services, and you will not
                  be able to opt out of those communications (e.g.,
                  communications regarding the Services or updates to our Terms
                  or this Privacy Policy). We process requests to be placed on
                  do-not-mail, do-not-phone and do-not-contact lists as required
                  by applicable law.
                </p>
                <p>
                  <b>“Do Not Track.”</b> Do Not Track (“DNT”) is a privacy
                  preference that users can set in certain web browsers. Please
                  note that we do not respond to or honor DNT signals or similar
                  mechanisms transmitted by web browsers.
                </p>
                <p>
                  <b>Cookies and Interest-Based Advertising.</b> You may stop or
                  restrict the placement of Technologies on your device or
                  remove them by adjusting your preferences as your browser or
                  device permits. The online advertising industry also provides
                  websites from which you may opt out of receiving targeted ads
                  from data partners and other advertising partners that
                  participate in self-regulatory programs. You can access these
                  and learn more about targeted advertising and consumer choice
                  and privacy, at
                  www.networkadvertising.org/managing/opt_out.asp,
                  http://www.youronlinechoices.eu/,
                  https://youradchoices.ca/choices/, and
                  www.aboutads.info/choices/. To separately make choices for
                  mobile apps on a mobile device, you can download DAA’s
                  AppChoices application from your device’s app store.
                  Alternatively, for some devices you may use your device’s
                  platform controls in your settings to exercise choice. Please
                  note you must separately opt out in each browser and on each
                  device. Advertisements on third party websites that contain
                  the AdChoices link may have been directed to you based on
                  information collected by advertising partners over time and
                  across websites. These advertisements provide a mechanism to
                  opt out of the advertising partners’ use of this information
                  for interest-based advertising purposes.
                </p>
                <h3>Your Privacy Rights</h3>
                <p>
                  In accordance with applicable law, you may have the right to:
                </p>
                <ul>
                  <li>
                    Access to/Portability of Personal Data. about you consistent
                    with legal requirements. In addition, you may have the right
                    in some cases to receive or have your electronic Personal
                    Data transferred to another party.
                  </li>
                  <li>
                    Request Correction. of your personal information where it is
                    inaccurate or incomplete. In some cases, we may provide
                    self-service tools that enable you to update your personal
                    information or we may refer you to the controller of your
                    personal information who is able to make the correction.
                  </li>
                  <li>
                    Request Deletion. of your personal information, subject to
                    certain exceptions prescribed by law.
                  </li>
                  <li>
                    Request restriction of or object to processing of your
                    personal information, including the right to opt in or opt
                    out of the sale of your Personal Data to third parties, if
                    applicable, where such requests are permitted by law.
                  </li>
                </ul>
                <p>
                  If you would like to exercise any of these rights, please log
                  into your account or contact us as set forth below. We will
                  process such requests in accordance with applicable laws. To
                  protect your privacy, we will take steps to verify your
                  identity before fulfilling your request.
                </p>
                <h2>How Is Data Retained?</h2>
                <p>
                  We store the personal information we receive as described in
                  this Privacy Policy for as long as you use our Services or as
                  necessary to fulfill the purpose(s) for which it was
                  collected, provide our Services, resolve disputes, establish
                  legal defenses, conduct audits, pursue legitimate business
                  purposes, enforce our agreements, and comply with applicable
                  laws.
                </p>
                <h2>Children’s Information</h2>
                <p>
                  The Services are not directed to children under 17 (or other
                  age as required by local law), and we do not knowingly collect
                  personal information from children. If you learn that your
                  child has provided us with personal information without your
                  consent, you may contact us as set forth below. If we learn
                  that we have collected any personal information in violation
                  of applicable law, we will promptly take steps to delete such
                  information and terminate the child’s account.
                </p>
                <h2>Supervisory Authority</h2>
                <p>
                  If you are located in the European Economic Area or the UK,
                  you have the right to lodge a complaint with a supervisory
                  authority if you believe our processing of your personal
                  information violates applicable law.
                </p>
                <h2>
                  What Happens When There Are Changes to this Privacy Policy?
                </h2>
                <p>
                  We may amend this Privacy Policy from time to time. If we make
                  material changes in the way we collect or use information, we
                  will notify you by posting an announcement on the Services or
                  sending you an email.
                </p>
                <h2>What If I Have Questions or Concerns?</h2>
                <p>
                  If you have any questions or concerns regarding privacy using
                  the Services, please send us a detailed message to
                  support@fevo.com.We will make every effort to resolve your
                  concerns.
                </p>
                <h2>Fevo, Inc.</h2>
                <p>
                  12 Little W. 12th Street
                  <br />
                  New York, NY 10014
                </p>
                <b>Effective Date:</b> April 23, 2020
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapState = (state) => ({
  data: dataSelector(state),
});
const mapProps = {};
const enhance = connect(mapState, mapProps);
export default enhance(PrivacyPage);
