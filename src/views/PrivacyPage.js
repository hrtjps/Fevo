import React from "react";

import { connect } from "react-redux";
import './TermsPage.scss';
import {dataSelector} from "../modules/app";

const PrivacyPage = () => {

  return (
    <>
      <section className="terms-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="term-title">
              <h1>PRIVACY POLICY</h1>
            </div>
          </div>
          <div className="col-md-8 offset-0 offset-md-2">
            <div className="terms-text">
              <p>
                This Privacy Policy describes the policies and procedures of
                Host Committee, Inc. d/b/a Fevo (“Fevo”, “we”, “our” or “us”) on
                the collection, use and disclosure of your information on
                www.fevo.com (the “Site”) and the services, features, content or
                applications we offer (collectively with the Site, the
                “Services”). We receive information about you from various
                sources, including: (i) if you register for the Site and the
                Services, or access the Site and Services with your Facebook ID
                and account, through your user account on the Services (your
                “Account”); (ii) your use of the Services generally; and (iii)
                from third party websites and services. When you use the
                Services, you are consenting to the collection, transfer,
                manipulation, storage, disclosure and other uses of your
                information as described in this Privacy Policy. <br />
                <br />
                WHAT DOES THIS PRIVACY POLICY COVER?
                <br />
                <br />
                This Privacy Policy covers the treatment of personally
                identifiable information (“Personal Information”) gathered when
                you are using or accessing the Services. This Privacy Policy
                also covers our treatment of any Personal Information that our
                business partners share with us or that we share with our
                business partners.
                <br />
                <br />
                This Privacy Policy does not apply to the practices of third
                parties that we do not own or control, including but not limited
                to any third party websites, services and applications (“Third
                Party Services”) that you elect to access through the Service or
                to individuals that we do not manage or employ, such as event
                provider websites, services, applications and employees. While
                we attempt to facilitate access only to those Third Party
                Services that share our respect for your privacy, we cannot take
                responsibility for the content or privacy policies of those
                Third Party Services. We encourage you to carefully review the
                privacy policies of any Third Party Services you access.
                <br />
                <br />
                WHAT INFORMATION DO WE COLLECT?
                <br />
                <br />
                The information we gather enables us to personalize, improve and
                continue to operate the Services. In connection with certain
                aspects of the Services, we may request, collect and/or display
                some of your Personal Information. We collect the following
                types of information from our users.
                <br />
                <br />
                ACCOUNT INFORMATION:
                <br />
                <br />
                When you create an Account, you will provide information that
                could be Personal Information, such as your name, password and
                email address. You acknowledge that this information may be
                personal to you, and by creating an account on the Services and
                providing Personal Information to us, you allow others,
                including us, to identify you and therefore may not be
                anonymous. We may use your contact information to send you
                information about our Services. You may unsubscribe from these
                messages through your Account settings, although we, regardless,
                reserve the right to contact you when we believe it is
                necessary, such as for account recovery purposes. If you access
                the Services through your Facebook ID, you are allowing the
                Services to access your information, such as your Facebook
                account profile picture. We will use all information available
                that we may receive through your Facebook account in accordance
                with Facebook's policies and your account privacy settings
                selected through Facebook, so please review such policies and
                settings.
                <br />
                <br />
                USER CONTENT:
                <br />
                <br />
                Some features of the Services allow you to provide content to
                the Services. All content submitted by you to the Services may
                be retained by us indefinitely, even after you terminate your
                account. We may continue to disclose such content to third
                parties in a manner that does not reveal Personal Information,
                as described in this Privacy Policy.
                <br />
                <br />
                LOCATION INFORMATION:
                <br />
                <br />
                Some of our Services may include features based on users’ actual
                locations and may report users’ current locations
                (“Location-Based Services”). To the extent you voluntarily opt
                to use any Location-Based Services, we will collect and store
                information about your location at the time you use those
                Location-Based Services. This information can come from a
                variety of sources depending on the client you use to access the
                Services; for example, a mobile phone may report its GPS
                location or IP address at the time Location-Based Services are
                used.
                <br />
                <br />
                FINANCIAL INFORMATION:
                <br />
                <br />
                If you make purchases through the Services, your financial
                information, such as your payment method (valid credit card
                number, type, expiration date or other financial information),
                is collected and stored by our third party payment processing
                company (the “Payment Processor"), and use and storage of that
                information is governed by the Payment Processor's applicable
                terms of service and privacy policy. We currently use Stripe as
                our Payment Processor (www.stripe.com). In order to facilitate
                your order transactions, we collect and store your billing zip
                code, credit card type and the last four digits of your credit
                card number, but no other financial information.
                <br />
                <br />
                SHIPPING INFORMATION:
                <br />
                <br />
                We may collect your shipping information in connection with
                certain purchases through the Services. We may pass this
                information to our Payment Processor, event providers, partners
                and Agents for purposes of customer service, fulfillment,
                shipping and returns. The use of your Personal Information by
                such parties is subject to their respective privacy policies.
                <br />
                <br />
                IP ADDRESS INFORMATION AND OTHER INFORMATION COLLECTED
                AUTOMATICALLY:
                <br />
                <br />
                We automatically receive and record information from your web
                browser when you interact with the Services, including your IP
                address and cookie information. This information is used for
                fighting spam/malware and also to facilitate collection of data
                concerning your interaction with the Services (e.g., what links
                you have clicked on).
                <br />
                <br />
                Generally, the Services automatically collect usage information,
                such as the number and frequency of visitors to the Site. We may
                use this data in aggregate form, that is, as a statistical
                measure, but not in a manner that would identify you personally.
                This type of aggregate data enables us and third parties
                authorized by us to figure out how often individuals use parts
                of the Services so that we can analyze and improve them.
                <br />
                <br />
                EMAIL COMMUNICATIONS:
                <br />
                <br />
                We may receive a confirmation when you open an email from us. We
                use this confirmation to improve our customer service.
                <br />
                <br />
                INFORMATION COLLECTED USING COOKIES:
                <br />
                <br />
                Cookies are pieces of text that may be provided to your computer
                through your web browser when you access a website. Your browser
                stores cookies in a manner associated with each website you
                visit. We use cookies to enable our servers to recognize your
                web browser and tell us how and when you visit the Site and
                otherwise use the Services through the Internet.
                <br />
                <br />
                Our cookies do not, by themselves, contain Personal Information,
                and we do not combine the general information collected through
                cookies with other Personal Information to tell us who you are.
                As noted, however, we do use cookies to identify that your web
                browser has accessed aspects of the Services and may associate
                that information with your Account if you have one.
                <br />
                <br />
                Google Analytics Advertising Features have been implemented to
                collect additional data about our site traffic and demographics.
                We use first-party cookies (such as the Google Analytics cookie)
                or other first-party identifiers, and third-party cookies (such
                as Google advertising cookies) or other third-party identifiers
                together.
                <br />
                <br />
                Most browsers have an option for turning off the cookie feature,
                which will prevent your browser from accepting new cookies, as
                well as (depending on the sophistication of your browser
                software) allowing you to decide on acceptance of each new
                cookie in a variety of ways. Visitors can opt-out of the Google
                Analytics Advertising features through Ad Settings, Ad Settings
                for mobile apps, or any other available means, including Google
                Analytics’ currently available opt-outs for the web. We strongly
                recommend that you leave cookies active, because they may enable
                you to take advantage of the most attractive features of the
                Services.
                <br />
                <br />
                This Privacy Policy covers our use of cookies only and does not
                cover the use of cookies by third parties. We do not control
                when or how third parties place cookies on your computer. For
                example, third party websites to which a link points may set
                cookies on your computer.
                <br />
                <br />
                INFORMATION RELATED TO ADVERTISING:
                <br />
                <br />
                To support and enhance the Services, we may, or we may allow
                third parties (such as Facebook) to, use cookies to collect
                information from your use of the Services in order to serve
                targeted advertisements to you when you visit third party
                websites.
                <br />
                <br />
                AGGREGATE INFORMATION:
                <br />
                <br />
                We collect statistical information about how both unregistered
                and registered users, collectively, use the Services (“Aggregate
                Information”). Some of this information is derived from Personal
                Information. This statistical information is not Personal
                Information and cannot be tied back to you, your Account or your
                web browser.
                <br />
                <br />
                SMS NOTIFICATIONS:
                <br />
                <br />
                Some of our Services may allow you to receive SMS notifications
                from us. To the extent you voluntarily opt to have SMS
                notifications sent directly to your mobile phone, we receive and
                store the information you provide, including your telephone
                number. These messages notify you of Fevo activity and may allow
                you to access the Services from your phone. You can adjust the
                types of notifications you receive and when you receive them by
                editing your SMS notification settings.
                <br />
                <br />
                HOW, AND WITH WHOM, IS MY INFORMATION SHARED?
                <br />
                <br />
                Certain of the Services are designed to help you share
                information with others. As a result, some of the information
                generated through the Services is shared publicly or with third
                parties.
                <br />
                <br />
                IS INFORMATION ABOUT ME SECURE?
                <br />
                <br />
                Your Account information will be protected by a password for
                your privacy and security. You need to prevent unauthorized
                access to your Account and Personal Information by selecting and
                protecting your password appropriately and limiting access to
                your computer and browser by signing off after you have finished
                accessing your Account.
                <br />
                <br />
                We seek to protect Account information to ensure that it is kept
                private; however, we cannot guarantee the security of any
                Account information. Unauthorized entry or use, hardware or
                software failure, and other factors, may compromise the security
                of user information at any time.
                <br />
                <br />
                We otherwise store all of our information, including your IP
                address information, using industry-standard techniques. We do
                not guarantee or warrant that such techniques will prevent
                unauthorized access to information about you that we store,
                Personal Information or otherwise.
                <br />
                <br />
                WHAT INFORMATION OF MINE CAN I ACCESS?
                <br />
                <br />
                If you are a registered user, you can access information
                associated with your Account by logging into the Services.
                Registered and unregistered users can access and delete cookies
                through their web browser settings.
                <br />
                <br />
                California Privacy Rights: Under California Civil Code sections
                1798.83-1798.84, California residents are entitled to ask us for
                a notice identifying the categories of personal customer
                information which we share with our affiliates and/or third
                parties for marketing purposes, and providing contact
                information for such affiliates and/or third parties. If you are
                a California resident and would like a copy of this notice,
                please submit a written request to the following address: Host
                Committee, Inc. d/b/a Fevo, 135 W. 26th Street, 2nd Floor, New
                York, NY 10007.
                <br />
                <br />
                HOW CAN I DEACTIVATE MY ACCOUNT?
                <br />
                <br />
                Should you ever decide to deactivate your Account, you may do so
                by emailing support@fevo.com or otherwise through the Services.
                If you deactivate your Account, any association between your
                Account and information we store will no longer be accessible
                through your Account. However, given the nature of sharing on
                the Services, any public activity on your Account prior to
                deactivation will remain stored on our servers and will remain
                accessible to the public.
                <br />
                <br />
                WHAT CHOICES DO I HAVE REGARDING MY INFORMATION?
                <br />
                <br />
                You can use some of the features of the Services without
                registering, thereby limiting the type of information that we
                collect.
                <br />
                You can always opt not to disclose certain information to us,
                even though it may be needed to take advantage of some of our
                features.
                <br />
                You can deactivate your Account. Please note that we will need
                to verify that you have the authority to deactivate the Account,
                and activity generated prior to deletion will remain stored by
                us and may be publicly accessible.
                <br />
                WHAT HAPPENS WHEN THERE ARE CHANGES TO THIS PRIVACY POLICY?
                <br />
                <br />
                We may amend this Privacy Policy from time to time. Use of
                information we collect now is subject to the Privacy Policy in
                effect at the time such information is used. If we make changes
                in the way we collect or use information, we will notify you by
                posting an announcement on the Services or sending you an email.
                A user is bound by any changes to the Privacy Policy when he or
                she uses the Services after such changes have been first posted.
                <br />
                <br />
                WHAT IF I HAVE QUESTIONS OR CONCERNS?
                <br />
                <br />
                If you have any questions or concerns regarding privacy using
                the Services, please send us a detailed message to
                support@fevo.com.we will make every effort to resolve your
                concerns.
                <br />
                <br />
                Effective Date: February 22, 2016
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    </>
  );
};

const mapState = state => ({
  data: dataSelector(state)
});
const mapProps = {
  
};
const enhance = connect(mapState, mapProps);
export default enhance(PrivacyPage);
