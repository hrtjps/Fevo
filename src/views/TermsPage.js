import React from "react";

import { connect } from "react-redux";
import './TermsPage.scss';
import {dataSelector} from "../modules/app";

const TermsPage = () => {

  return (
    <>
      <section className="terms-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="term-title">
                <h1>FEVO TERMS OF SERVICE</h1>
              </div>
            </div>
            <div className="col-md-8 offset-0 offset-md-2">
              <div className="terms-text">
                <p>
                  Please read these Terms of Service (collectively with Fevo’s
                  Privacy Policy, the “Terms of Service”) fully and carefully
                  before using www.fevo.com (the “Site”) and the services,
                  features, content or applications offered by Fevo, Inc. (“Fevo”,
                  “we”, “us” or “our”) (together with the Site, the “Services”).
                  These Terms of Service set forth the legally binding terms and
                  conditions for your use of the Site and the Services.
                </p>
                <br />
                <p className="terms-section">ACCEPTANCE OF TERMS OF SERVICE</p>
                <br />
                <p>
                  By registering for and/or using the Services in any manner, you
                  agree to these Terms of Service and all other operating rules,
                  policies and procedures that may be published from time to time
                  on the Site by us, each of which is incorporated by reference
                  and each of which may be updated from time to time without
                  notice to you. These Terms of Service apply to all users of the
                  Services, registered or otherwise.
                </p>
                <br />
                <p>
                  Certain of the Services may be subject to additional terms and
                  conditions specified by us from time to time; your use of such
                  Services is subject to those additional terms and conditions,
                  which are incorporated into these Terms of Service by this
                  reference.
                </p>
                <br />
                <p>
                  ARBITRATION NOTICE AND CLASS ACTION WAIVER: EXCEPT FOR CERTAIN
                  TYPES OF DISPUTES DESCRIBED IN THE ARBITRATION SECTION BELOW,
                  YOU AGREE THAT DISPUTES BETWEEN YOU AND US WILL BE RESOLVED BY
                  BINDING, INDIVIDUAL ARBITRATION AND YOU WAIVE YOUR RIGHT TO
                  PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
                </p>
                <br />
                <p className="terms-section">
                  FEVO FACILITATES PURCHASE OF TICKETS ONLY
                </p>
                <br />
                <p>FEVO DOES NOT PROVIDE EVENTS</p> <br />
                <p>
                  Fevo partners with event providers solely in order to facilitate
                  your purchase of tickets to events through the Services, or
                  otherwise feature events through the Services (collectively,
                  “Events”). You acknowledge that Fevo solely facilitates sales of
                  tickets to Events, and Fevo has no responsibility, and shall not
                  be liable, with respect to the Events or Event providers,
                  including without limitation cancellation of Events or any
                  inconvenience you may experience due to such cancellation or any
                  other causes out of Fevo’s control. Fevo has no control over or
                  responsibility for Events, Event providers, or their websites,
                  resources, materials, content, products or services, and Fevo
                  does not guarantee the quality, safety or legality of Events or
                  the truth or accuracy of descriptions of Events or any other
                  information regarding Events. Descriptions or images of, or
                  references to, Events through the Services do not imply Fevo’s
                  endorsement of such Events. Without limiting the foregoing, Fevo
                  shall not be responsible for (i) any lost, stolen or damaged
                  tickets, (ii) the failure of an Event provider to honor a
                  ticket, (iii) an Event provider’s breach of any warranty to you,
                  or (iv) any other action, omission or wrongdoing of an Event
                  provider.
                </p>
                <br />
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW AND IN
                  ADDITION TO ALL OTHER LIMITATIONS AND DISCLAIMERS IN THESE TERMS
                  OF SERVICE, WE DISCLAIM ANY LIABILITY OR LOSS RELATED TO EVENTS.
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, In no event
                  OR CIRCUMSTANCE shall FEVO be liable for any direct, indirect,
                  punitive, incidental, special, OR consequential damages,
                  INCLUDING WITHOUT LIMITATION PERSONAL INJURY OR PROPERTY DAMAGE
                  OF ANY NATURE WHATSOEVER, arising out of or IN CONNECTION with
                  EVENts, EVENT PROVIDERS, OR YOUR ATTENDANCE AT EVENTS, INCLUDING
                  WITHOUT LIMITATION IN CONNECTION WITH ANY CANCELLATION OF EVENTS
                  OR ANY OTHER EVENT GUESTS, and you agree to hold us harmless
                  from the same. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE
                  LAW, YOUR ATTENDANCE AT OR ANY OTHER EXPERIENCE OR INTERACTION
                  RELATING TO EVENTS, EVENT PROVIDERS OR EVENT GUESTS IS SOLELY AT
                  YOUR OWN RISK.
                </p>
                <br />
                <p className="terms-section">ELIGIBILITY</p>
                <br />
                <p>
                  You represent and warrant that you are at least 13 years of age.
                  If you are under age 13, you may not, under any circumstances or
                  for any reason, use the Services. We may, in our sole
                  discretion, refuse to offer the Services to any person or entity
                  and change its eligibility criteria at any time. You are solely
                  responsible for ensuring that these Terms of Service are in
                  compliance with all laws, rules and regulations applicable to
                  you and the right to access the Services is revoked where these
                  Terms of Service or use of the Services is prohibited or to the
                  extent offering, sale or provision of the Services conflicts
                  with any applicable law, rule or regulation. Further, the
                  Services are offered only for your use, and not for the use or
                  benefit of any third party.
                </p>
                <br />
                <p className="terms-section">REGISTRATION </p>
                <br />
                <p>
                  To use the Services, you may register for an account on the
                  Services or log into the Services through your Facebook account
                  with your Facebook ID (in each case, your “Account”). By using
                  the Services through your Facebook account, you permit us to
                  access certain information from such account for use by the
                  Services, and you understand that we may make available
                  information or content from such account through the Services in
                  connection with your Account. You may control the amount of
                  information that is accessible to us by adjusting your Facebook
                  account privacy settings. You must provide accurate and complete
                  information and keep your Account information updated. You are
                  solely responsible for the activity that occurs on your Account,
                  and for keeping your Account password secure. You may never use
                  another person’s user account or registration information for
                  the Services without permission. You must notify us immediately
                  of any change in your eligibility to use the Services (including
                  any changes to or revocation of any licenses from state
                  authorities), breach of security or unauthorized use of your
                  Account. You should never publish, distribute or post login
                  information for your Account. You shall have the ability to
                  deactivate your Account, either directly or through a request
                  made to one of our employees or affiliates.
                </p>
                <br />
                <p className="terms-section">CONTENT</p>
                <br />
                <p className="terms-bullet">DEFINITION </p>
                <p>
                  For purposes of these Terms of Service, the term “Content”
                  includes, without limitation, information, data, text,
                  photographs, videos, audio clips, written posts and comments,
                  software, scripts, graphics, and interactive features generated,
                  provided, or otherwise made accessible on or through the
                  Services. For the purposes of these Terms of Service, “Content”
                  also includes all User Content (as defined below).
                </p>
                <br />
                <p className="terms-bullet">USER CONTENT</p>
                <p>
                  All Content added, created, uploaded, submitted, distributed, or
                  posted to the Services by users (collectively “User Content”),
                  whether publicly posted or privately transmitted, is the sole
                  responsibility of the person who originated such User Content.
                  You represent that all User Content provided by you is accurate,
                  complete, up-to-date, and in compliance with all applicable
                  laws, rules and regulations. You acknowledge that all Content,
                  including User Content, accessed by you using the Services is at
                  your own risk and you will be solely responsible for any damage
                  or loss to you or any other party resulting therefrom. We do not
                  guarantee that any Content you access on or through the Services
                  is or will continue to be accurate.
                </p>
                <br />
                <p className="terms-bullet">NOTICES AND RESTRICTIONS </p>
                <p>
                  The Services may contain Content specifically provided by us,
                  our partners or our users and such Content is protected by
                  copyrights, trademarks, service marks, patents, trade secrets or
                  other proprietary rights and laws. You shall abide by and
                  maintain all copyright notices, information, and restrictions
                  contained in any Content accessed through the Services.
                </p>
                <br />
                <p className="terms-bullet">USE LICENSE </p>
                <p>
                  Subject to these Terms of Service, we grant each user of the
                  Services a worldwide, non-exclusive, non-sublicensable and non-
                  transferable license to use (i.e., to download and display
                  locally) Content solely for purposes of using the Services. Use,
                  reproduction, modification, distribution or storage of any
                  Content for other than purposes of using the Services is
                  expressly prohibited without prior written permission from us.
                  You shall not sell, license, rent, or otherwise use or exploit
                  any Content for commercial use or in any way that violates any
                  third party right.
                </p>
                <br />
                <p className="terms-bullet">LICENSE GRANT </p>
                <p>
                  By submitting User Content through the Services, you hereby do
                  and shall grant us a worldwide, non-exclusive, perpetual,
                  royalty- free, fully paid, sublicensable and transferable
                  license to use, edit, modify, truncate, aggregate, reproduce,
                  distribute, prepare derivative works of, display, perform, and
                  otherwise fully exploit the User Content in connection with the
                  Site, the Services and our (and our successors’ and assigns’)
                  businesses, including without limitation for promoting and
                  redistributing part or all of the Site or the Services (and
                  derivative works thereof) in any media formats and through any
                  media channels (including, without limitation, third party
                  websites and feeds), and including after your termination of
                  your Account or the Services. You also hereby do and shall grant
                  each user of the Site and/or the Services a non-exclusive,
                  perpetual license to access your User Content that is accessible
                  to such user through the Site and/or the Services, and to use,
                  edit, modify, reproduce, distribute, prepare derivative works
                  of, display and perform such User Content, including after your
                  termination of your Account or the Services. For clarity, the
                  foregoing license grants to us and our users does not affect
                  your other ownership or license rights in your User Content,
                  including the right to grant additional licenses to your User
                  Content, unless otherwise agreed in writing. You represent and
                  warrant that you have all rights to grant such licenses to us
                  without infringement or violation of any third party rights,
                  including without limitation, any privacy rights, publicity
                  rights, copyrights, trademarks, contract rights, or any other
                  intellectual property or proprietary rights.
                </p>
                <br />
                <p className="terms-bullet">AVAILABILITY OF CONTENT </p>
                <p>
                  We do not guarantee that any Content will be made available on
                  the Site or through the Services. We reserve the right to, but
                  do not have any obligation to, (i) remove, edit or modify any
                  Content in our sole discretion, at any time, without notice to
                  you and for any reason (including, but not limited to, upon
                  receipt of claims or allegations from third parties or
                  authorities relating to such Content or if we are concerned that
                  you may have violated these Terms of Service), or for no reason
                  at all and (ii) to remove or block any Content from the
                  Services.
                </p>
                <br />
                <p className="terms-section">RULES OF CONDUCT </p>
                <br />
                <p>
                  As a condition of use, you promise not to use the Services for
                  any purpose that is prohibited by these Terms of Service, and
                  you shall not (directly or indirectly), in connection with your
                  use of the Services, violate or infringe the rights of any other
                  person or entity, including, without limitation, intellectual
                  property rights, or violate any applicable local, state,
                  national and international laws, rules or regulations. You are
                  responsible for all of your activity in connection with the
                  Services.
                </p>
                <br />
                <p>
                  Tickets purchased through the Services are non-transferable,
                  unless otherwise expressly specified by us. Unlawful resale (or
                  attempted resale), counterfeit or copy of tickets purchased
                  through the Services is grounds for seizure and cancellation
                  without compensation. In addition, Fevo reserves the right to
                  restrict or deny ticket purchasing privileges to anyone that
                  Fevo determines to be, or has been, in violation of these Terms
                  of Service. Tickets may not be used for advertising, promotions,
                  contests or sweepstakes, unless formal written authorization is
                  given by Fevo.
                </p>
                <br />
                <p>
                  You shall not (and shall not permit any third party to) either
                  (1) take any action or (2) upload, download, post, submit or
                  otherwise distribute or facilitate distribution of any Content
                  on or through the Service, including without limitation any User
                  Content, that:
                </p>
                <br />
                <p className="terms-bullet">
                  you know is false, misleading, untruthful or inaccurate;
                </p>
                <br />
                <p className="terms-bullet">
                  is unlawful, threatening, abusive, harassing, defamatory,
                  libelous, deceptive, fraudulent, invasive of another's privacy,
                  tortious, obscene, vulgar, pornographic, offensive, profane,
                  contains or depicts nudity, contains or depicts sexual activity,
                  or is otherwise inappropriate as determined by us in our sole
                  discretion;
                </p>
                <br />
                <p className="terms-bullet">
                  constitutes unauthorized or unsolicited advertising, junk or
                  bulk e-mail (“spamming”);
                </p>
                <br />
                <p className="terms-bullet">
                  contains software viruses or any other computer codes, files, or
                  programs that are designed or intended to disrupt, damage, limit
                  or interfere with the proper function of any software, hardware,
                  or telecommunications equipment or to damage or obtain
                  unauthorized access to any system, data, password or other
                  information of ours or of any third party;
                </p>
                <br />
                <p className="terms-bullet">
                  impersonates any person or entity, including any of our
                  employees or representatives; or
                </p>
                <br />
                <p className="terms-bullet">
                  includes anyone’s identification documents or anyone else’s
                  sensitive financial information.
                </p>
                <br />
                <p>
                  You shall not: (i) take any action that imposes or may impose
                  (as determined by us in our sole discretion) an unreasonable or
                  disproportionately large load on our (or our third party
                  providers’) infrastructure; (ii) interfere or attempt to
                  interfere with the proper working of the Services or any
                  activities conducted on the Services; (iii) bypass, circumvent
                  or attempt to bypass or circumvent any measures we may use to
                  prevent or restrict access to the Services (or other accounts,
                  computer systems or networks connected to the Services); (iv)
                  run any form of auto-responder or “spam” on the Services; (v)
                  use manual or automated software, devices, or other processes to
                  process or place ticket orders, or “crawl” or “spider” any page
                  of the Site; (vi) harvest or scrape any Content from the
                  Services; or (vii) otherwise take any action in violation of our
                  guidelines and policies.
                </p>
                <br />
                <p>
                  You shall not (directly or indirectly): (i) decipher, decompile,
                  disassemble, reverse engineer or otherwise attempt to derive any
                  source code or underlying ideas or algorithms of any part of the
                  Services (including without limitation any application), except
                  to the limited extent applicable laws specifically prohibit such
                  restriction, (ii) modify, translate, or otherwise create
                  derivative works of any part of the Services, or (iii) copy,
                  rent, lease, distribute, or otherwise transfer any of the rights
                  that you receive hereunder. You shall abide by all applicable
                  local, state, national and international laws and regulations.
                </p>
                <br />
                <p>
                  We also reserve the right to access, read, preserve, and
                  disclose any information as we reasonably believe is necessary
                  to (i) satisfy any applicable law, regulation, legal process or
                  governmental request, (ii) enforce these Terms of Service,
                  including investigation of potential violations hereof, (iii)
                  detect, prevent, or otherwise address fraud, security or
                  technical issues, (iv) respond to user support requests, or (v)
                  protect the rights, property or safety of us, our users and the
                  public.
                </p>
                <br />
                <p className="terms-section">THIRD PARTY SERVICES </p>
                <br />
                <p>
                  The Services may permit you to link to other websites, services
                  or resources on the Internet, and other websites, services or
                  resources may contain links to the Services. When you access
                  third party resources on the Internet, including without
                  limitation Event provider websites, services or resources, you
                  do so at your own risk. These other resources are not under our
                  control, and you acknowledge that we are not responsible or
                  liable for the content, functions, accuracy, legality,
                  appropriateness or any other aspect of such websites or
                  resources. The inclusion of any such link does not imply our
                  endorsement or any association between us and their operators.
                  You further acknowledge and agree that we shall not be
                  responsible or liable, directly or indirectly, for any damage or
                  loss caused or alleged to be caused by or in connection with the
                  use of or reliance on any such content, goods or services
                  available on or through any such website or resource.
                </p>
                <br />
                <p className="terms-section">PURCHASES</p>
                <br />
                <p className="terms-section-part">PAYMENT </p>
                <br />
                <p>
                  Certain of our Services allow you to make purchases through the
                  Services (“Purchases”). In order to make a Purchase, you must
                  use a valid credit card or other payment method accepted by the
                  Services (which may change from time to time in Fevo’s sole
                  discretion) (your “Payment Method”), with full authority to use
                  it. Fevo reserves the right, in its sole discretion, to take
                  steps to verify your identity and/or eligibility to process your
                  order. Please note that any payment terms presented to you in
                  the process of making Purchases are deemed part of these Terms
                  of Service. We use a third-party payment processor (the “Payment
                  Processor”) to allow you to pay for Purchases. The processing of
                  payments will be subject to the terms, conditions and privacy
                  policies of the Payment Processor in addition to these Terms of
                  Service. We are not responsible for error by the Payment
                  Processor. By choosing to make a Purchase, you agree to pay us,
                  through the Payment Processor, all charges at the prices then in
                  effect for such Purchase in accordance with your Payment Method
                  and you authorize us, through the Payment Processor, to charge
                  your Payment Method. Such charges for your Purchase may include
                  shipping fees and state and local sales tax, the amount of which
                  varies due to factors including the type of item purchased and
                  the shipping destination. You agree to make payment using that
                  selected Payment Method. We reserve the right to correct any
                  errors or mistakes that it makes even if it has already
                  requested or received payment. The sale or purchase of tickets
                  to entertainment events may be regulated by certain state,
                  county and city laws or regulations. You acknowledge that
                  complying with laws is your responsibility, and YOU AGREE NOT TO
                  HOLD US LIABLE FOR YOUR FAILURE TO COMPLY WITH ANY LAW OR OUR
                  FAILURE TO NOTIFY YOU OF, OR PROPERLY APPLY, ANY LAW. WE WILL
                  COMPLY WITH LAW ENFORCEMENT AND MAY PROVIDE THEM WITH ALL
                  INFORMATION YOU SUBMIT TO US TO ASSIST IN ANY INVESTIGATION OR
                  PROSECUTION THEY MAY CONDUCT. All Purchases of tickets through
                  the Services are final, unless the Event is canceled or the
                  Event provider authorizes a refund through the Services in its
                  sole discretion. If an Event is canceled or the Event provider
                  authorizes refunds to a ticket buyer, Fevo will refund the
                  ticket face value to ticket buyers who request refunds; provided
                  that Fevo is entitled to keep the processing fees charged by
                  Fevo to ticket buyers for such ticket sale. Notwithstanding the
                  foregoing, you agree and acknowledge that Fevo’s obligation to
                  make any refunds is subject and limited to Fevo’s holding or
                  receiving from Event providers of the applicable ticket sale
                  proceeds, and if Fevo does not have or receive from the Event
                  providers the applicable ticket sale proceeds, then Fevo cannot
                  provide you a refund for such ticket sale.
                </p>
                <br />
                <p className="terms-section-part">PAYMENT METHOD </p>
                <br />
                <p>
                  The terms of your payment will be based on your Payment Method
                  and may be determined by agreements between you and the
                  financial institution, credit card issuer or other provider of
                  your chosen Payment Method. If we, through the Payment
                  Processor, do not receive payment from you, you agree to pay all
                  amounts due for your Purchase upon demand.
                </p>
                <br />
                <p className="terms-section-part">
                  CURRENT INFORMATION REQUIRED.
                </p>
                <br />
                <p>
                  YOU MUST PROVIDE CURRENT, COMPLETE AND ACCURATE INFORMATION FOR
                  YOUR PAYMENT METHOD. YOU MUST PROMPTLY UPDATE ALL INFORMATION TO
                  KEEP YOUR PAYMENT METHOD CURRENT, COMPLETE AND ACCURATE (SUCH AS
                  A CHANGE IN BILLING ADDRESS, CREDIT CARD NUMBER, OR CREDIT CARD
                  EXPIRATION DATE), AND YOU MUST PROMPTLY NOTIFY US OR OUR PAYMENT
                  PROCESSOR IF YOUR PAYMENT METHOD IS CANCELED (E.G., FOR LOSS OR
                  THEFT) OR IF YOU BECOME AWARE OF A POTENTIAL BREACH OF SECURITY,
                  SUCH AS THE UNAUTHORIZED DISCLOSURE OR USE OF YOUR PASSWORD.
                </p>
                <br />
                <p className="terms-section">Experience Benefits.</p>
                <br />
                <p>
                  From time to time, you may become eligible to earn certain
                  experience benefits directly from Event providers through the
                  Services, based on the size of the group you have created for
                  the corresponding Event (collectively, “Experience Benefits”).
                  In addition to any specific rules and descriptions for each
                  Experience Benefit, which are incorporated herein, you
                  acknowledge that Experience Benefits or the opportunity to earn
                  Experience Benefits are at Fevo’s and the Event Provider’s sole
                  discretion. Fevo reserves the right, in its sole discretion at
                  any time, to cancel, suspend, terminate or modify any aspect of
                  the Experience Benefits, with or without notice to you. Fevo
                  also reserves the right, in its sole discretion, to terminate
                  your eligibility to earn Experience Benefits at any time, with
                  or without cause, with or without notice, effective immediately,
                  including without limitation if Fevo deems or suspects any
                  violation of these terms and conditions, cheating, fraud or
                  tampering with the operation of Experience Benefits. By
                  participating in the Experience Benefits, you agree to release
                  and hold harmless Fevo, its affiliates, suppliers, partners, and
                  each of Fevo’s and their respective parent companies,
                  subsidiaries, affiliates, partners, employees, contractors,
                  directors, officers, agents, suppliers and representatives, from
                  any and all liabilities, claims, damages, injury, loss, harm,
                  cost or expenses, including without limitation property damage,
                  personal injury and/or death, that arise from or relate to in
                  any way the Experience Benefits.
                </p>
                <br />
                <p className="terms-section">Points. </p>
                <br />
                <p>
                  From time to time, Fevo may choose to issue you a certain number
                  of points (“Points”) to your Account (the “Program”). In
                  addition to any specific rules and descriptions for each
                  issuance of Points, which are incorporated herein, the following
                  terms apply:
                </p>
                <br />
                <p className="terms-bullet">
                  Points, the number of Points, and the redemption value of Points
                  and any restrictions on the use of Points, are issued at Fevo’s
                  sole discretion. Any Points issued shall be automatically
                  redeemed at checkout on your next Purchase through the Services,
                  until the Points are fully redeemed. You acknowledge that even
                  if Points are redeemed, you may still need to pay for shipping.
                  Any remaining balance on the purchase amount for a given
                  Purchase after Points are fully redeemed is your sole
                  responsibility. You cannot choose when or when not to redeem any
                  Points in your Account.
                </p>
                <br />
                <p className="terms-bullet">
                  Points automatically expire and are forfeited at the date that
                  is three (3) years after the date such Points are issued. Points
                  are valid for redemption on the Services only and are void where
                  prohibited or restricted by law. Points are promotional coupons
                  and are not legal tender. Points are non-transferable,
                  non-exchangeable, have no value and cannot be used for cash back
                  or sold. Fevo reserves the right, in its sole discretion at any
                  time, to void any Points, or to cancel, suspend, terminate or
                  modify any aspect of the Program, with or without notice to you.
                  Fevo also reserves the right, in its sole discretion, to
                  terminate your participation in the Program at any time, with or
                  without cause, with or without notice, effective immediately,
                  including without limitation if Fevo deems or suspects any
                  violation of these terms and conditions, cheating, fraud or
                  tampering with the operation of Program.
                </p>
                <br />
                <p>
                  By participating in the Program, you agree to release and hold
                  harmless Fevo, its affiliates, suppliers, partners, and each of
                  Fevo’s and their respective parent companies, subsidiaries,
                  affiliates, partners, employees, contractors, directors,
                  officers, agents, suppliers and representatives, from any and
                  all liabilities, claims, damages, injury, loss, harm, cost or
                  expenses, including without limitation property damage, personal
                  injury and/or death, that arise from or relate to in any way the
                  Program and/or use or misuse of Points.
                </p>
                <br />
                <p className="terms-section">TERMINATION </p>
                <br />
                <p>
                  We may terminate your access to all or any part of the Services
                  at any time, with or without cause, with or without notice,
                  effective immediately, which may result in the forfeiture and
                  destruction of all information associated with your membership.
                  If you wish to deactivate your Account, you may do so by
                  following the instructions on the Site or through the Services.
                  All provisions of these Terms of Service which by their nature
                  should survive termination shall survive termination, including,
                  without limitation, licenses of User Content, ownership
                  provisions, warranty disclaimers, indemnity and limitations of
                  liability.
                </p>
                <br />
                <p className="terms-section">Warranty Disclaimer. </p>
                <br />
                <p>
                  WE HAVE NO SPECIAL RELATIONSHIP WITH OR FIDUCIARY DUTY TO YOU.
                  YOU ACKNOWLEDGE THAT WE HAVE NO DUTY TO TAKE ANY ACTION
                  REGARDING:
                </p>
                <br />
                <p className="terms-bullet">
                  which users gain access to the Services;
                </p>
                <br />
                <p className="terms-bullet">
                  what Content you access via the Services; or
                </p>
                <br />
                <p className="terms-bullet">
                  how you may interpret or use the Content.
                </p>
                <br />
                <p>
                  You release us from all liability for you having acquired or not
                  acquired Content through the Services. We make no
                  representations concerning any Content contained in or accessed
                  through the Services or relating to Events, and we will not be
                  responsible or liable for the accuracy, copyright compliance, or
                  legality of such material or Content contained in or accessed
                  through the Services.
                </p>
                <br />
                <p>
                  THE SERVICES AND CONTENT ARE PROVIDED “AS IS”, “AS AVAILABLE”
                  AND WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING,
                  BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF TITLE,
                  NON-INFRINGEMENT, MERCHANTABILITY AND FITNESS FOR A PARTICULAR
                  PURPOSE, AND ANY WARRANTIES IMPLIED BY ANY COURSE OF PERFORMANCE
                  OR USAGE OF TRADE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED BY US
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW. TO THE MAXIMUM EXTENT
                  PERMITTED BY LAW, WE, AND OUR DIRECTORS, EMPLOYEES, AGENTS,
                  SUPPLIERS, PARTNERS AND CONTENT PROVIDERS DO NOT WARRANT THAT:
                  (I) THE SERVICES WILL BE SECURE OR AVAILABLE AT ANY PARTICULAR
                  TIME OR LOCATION; (II) ANY DEFECTS OR ERRORS WILL BE CORRECTED;
                  (III) ANY CONTENT OR SOFTWARE AVAILABLE AT OR THROUGH THE
                  SERVICES IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS; OR (IV)
                  THE RESULTS OF USING THE SERVICES WILL MEET YOUR REQUIREMENTS.
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, YOUR USE OF THE SERVICES
                  AND ACCESS TO EVENTS IS SOLELY AT YOUR OWN RISK.
                </p>
                <br />
                <p>
                  You shall and hereby do waive California Civil Code Section 1542
                  or any other similar law of any jurisdiction, which says in
                  substance: “A general release does not extend to claims which
                  the creditor does not know or suspect to exist in his favor at
                  the time of executing the release, which, if known by him must
                  have materially affected his settlement with the debtor.”
                </p>
                <br />
                <p>
                  Because some states/jurisdictions do not allow the exclusion or
                  limitation of liability for consequential or incidental damages,
                  or the exclusion of implied warranties, the above exclusions or
                  limitations may not apply to you. If any applicable authority
                  holds any portion of this section to be unenforceable, then
                  liability will be limited to the fullest extent of applicable
                  law. You may have other rights, which vary from jurisdiction to
                  jurisdiction.
                </p>
                <br />
                <p className="terms-section">Mobile/Wireless Policy.</p>
                <br />
                <p>
                  Some of our Services may allow you to receive SMS notifications
                  from us. To the extent you voluntarily opt to have SMS
                  notifications sent directly to your mobile phone, the following
                  terms apply:
                </p>
                <br />
                <p>
                  In addition to any fee of which you are notified, your mobile
                  provider's standard messaging rates apply to our confirmation
                  SMS and all subsequent SMS correspondence. You may choose to
                  receive Fevo mobile alerts by signing up. Message and data rates
                  may apply, according to your individual rate plan provided by
                  your wireless carrier. Please consult your mobile service
                  carrier's pricing plan to determine the charges for browsing
                  data and sending and receiving text messages. Under no
                  circumstances will Fevo, its parent or corporate affiliates be
                  responsible for any text messaging or wireless charges incurred
                  by you or by a person that has access to your wireless device or
                  telephone number as a result of a promotion. If your carrier
                  does not permit text alerts, you may not receive the Fevo text
                  alerts. Pre-paid phones or calling plans may not be supported.
                  You may receive a bounceback message for every message you send
                  to us.
                </p>
                <br />
                <p>
                  We will not be liable for any delays in the receipt of any SMS
                  messages, as delivery is subject to effective transmission from
                  your network operator. SMS message services are provided on an
                  AS IS basis.
                </p>
                <br />
                <p>
                  Data obtained from you in connection with this SMS service may
                  include your cell phone number, your provider's name, and the
                  date, time, and content of your messages. We may use this
                  information to contact you and to provide the Services you
                  request from us. We will never share this information with a
                  third party.
                </p>
                <br />
                <p className="terms-section">Indemnification.</p>
                <br />
                <p>
                  You shall defend, indemnify, and hold harmless us, our
                  affiliates and partners and each of our and their respective
                  employees, contractors, directors, suppliers and representatives
                  from all liabilities, claims, and expenses, including reasonable
                  attorneys’ fees, that arise from or relate to your use or misuse
                  of, or access to, the Services, Content, or otherwise from your
                  User Content, Events, violation of these Terms of Service, or
                  infringement by you, or any third party using your Account or
                  identity in the Services, of any intellectual property or other
                  right of any person or entity. We reserve the right to assume
                  the exclusive defense and control of any matter otherwise
                  subject to indemnification by you, in which event you will
                  assist and cooperate with us in asserting any available
                  defenses.
                </p>
                <br />
                <p className="terms-section">Limitation of Liability.</p>
                <br />
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE,
                  NOR OUR DIRECTORS, EMPLOYEES, AGENTS, PARTNERS, SUPPLIERS OR
                  CONTENT PROVIDERS, BE LIABLE UNDER CONTRACT, TORT, STRICT
                  LIABILITY, NEGLIGENCE OR ANY OTHER LEGAL OR EQUITABLE THEORY
                  WITH RESPECT TO THE SERVICES OR ANY EVENTS (I) FOR ANY LOST
                  PROFITS, DATA LOSS, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR
                  SERVICES, OR SPECIAL, INDIRECT, INCIDENTAL, PUNITIVE,
                  COMPENSATORY OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER
                  (HOWEVER ARISING), OR PERSONAL INJURY OR PROPERTY DAMAGE (II)
                  FOR ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE (REGARDLESS OF
                  THE SOURCE OF ORIGINATION), OR (III) FOR ANY DIRECT DAMAGES IN
                  EXCESS OF (IN THE AGGREGATE) $50.00.
                </p>
                <br />
                <p>
                  Because some states/jurisdictions do not allow the exclusion or
                  limitation of liability for consequential or incidental damages,
                  the above limitation may not apply to you. If any applicable
                  authority holds any portion of this section to be unenforceable,
                  then liability will be limited to the fullest extent of
                  applicable law.
                </p>
                <br />
                <p className="terms-section">
                  ARBITRATION CLAUSE & CLASS ACTION WAIVER – IMPORTANT – PLEASE
                  REVIEW AS THIS AFFECTS YOUR LEGAL RIGHTS
                </p>
                <br />
                <p className="terms-section-part">ARBITRATION.</p>
                <br />
                <p>
                  YOU AGREE THAT ALL DISPUTES BETWEEN YOU AND US (WHETHER OR NOT
                  SUCH DISPUTE INVOLVES A THIRD PARTY) WITH REGARD TO YOUR
                  RELATIONSHIP WITH US, INCLUDING WITHOUT LIMITATION DISPUTES
                  RELATED TO THESE TERMS OF SERVICE, YOUR USE OF THE SERVICES,
                  AND/OR RIGHTS OF PRIVACY AND/OR PUBLICITY, WILL BE RESOLVED BY
                  BINDING, INDIVIDUAL ARBITRATION UNDER THE AMERICAN ARBITRATION
                  ASSOCIATION'S RULES FOR ARBITRATION OF CONSUMER-RELATED DISPUTES
                  AND YOU AND WE HEREBY EXPRESSLY WAIVE TRIAL BY JURY; PROVIDED,
                  HOWEVER, THAT TO THE EXTENT THAT YOU HAVE IN ANY MANNER VIOLATED
                  OR THREATENED TO VIOLATE OUR INTELLECTUAL PROPERTY RIGHTS, WE
                  MAY SEEK INJUNCTIVE OR OTHER APPROPRIATE RELIEF IN ANY STATE OR
                  FEDERAL COURT IN THE STATE OF NEW YORK. DISCOVERY AND RIGHTS TO
                  APPEAL IN ARBITRATION ARE GENERALLY MORE LIMITED THAN IN A
                  LAWSUIT, AND OTHER RIGHTS THAT YOU AND WE WOULD HAVE IN COURT
                  MAY NOT BE AVAILABLE IN ARBITRATION. As an alternative, you may
                  bring your claim in your local “small claims” court, if
                  permitted by that small claims court's rules and if within such
                  court’s jurisdiction, unless such action is transferred, removed
                  or appealed to a different court. You may bring claims only on
                  your own behalf. Neither you nor we will participate in a class
                  action or class-wide arbitration for any claims covered by this
                  agreement to arbitrate. YOU ARE GIVING UP YOUR RIGHT TO
                  PARTICIPATE AS A CLASS REPRESENTATIVE OR CLASS MEMBER ON ANY
                  CLASS CLAIM YOU MAY HAVE AGAINST US INCLUDING ANY RIGHT TO CLASS
                  ARBITRATION OR ANY CONSOLIDATION OF INDIVIDUAL ARBITRATIONS. The
                  location of the arbitration shall be New York, New York. You
                  also agree not to participate in claims brought in a private
                  attorney general or representative capacity, or consolidated
                  claims involving another person's account, if we are a party to
                  the proceeding. This dispute resolution provision will be
                  governed by the Federal Arbitration Act and not by any state law
                  concerning arbitration. In the event the American Arbitration
                  Association is unwilling or unable to set a hearing date within
                  one hundred and sixty (160) days of filing the case, then either
                  we or you can elect to have the arbitration administered instead
                  by the Judicial Arbitration and Mediation Services. Judgment on
                  the award rendered by the arbitrator may be entered in any court
                  having competent jurisdiction. Any provision of applicable law
                  notwithstanding, the arbitrator will not have authority to award
                  damages, remedies or awards that conflict with these Terms of
                  Service. You agree that regardless of any statute or law to the
                  contrary, any claim or cause of action arising out of, related
                  to or connected with the use of the Services or these Terms of
                  Services must be filed within one (1) year after such claim of
                  action arose or be forever banned.
                </p>
                <br />
                <p className="terms-section-part">SEVERABILITY.</p>
                <br />
                <p>
                  If the prohibition against class actions and other claims
                  brought on behalf of third parties contained above is found to
                  be unenforceable, then all of the preceding language in this
                  Arbitration section will be null and void. This arbitration
                  agreement will survive the termination of your relationship with
                  us.
                </p>
                <br />
                <p className="terms-section">Governing Law and Jurisdiction.</p>
                <br />
                <p>
                  These Terms of Service shall be governed by and construed in
                  accordance with the laws of the State of New York, without
                  regard to the conflicts of law provisions thereof, and the
                  United States of America. You agree that any dispute arising
                  from or relating to the subject matter of these Terms of Service
                  shall be governed by the exclusive jurisdiction and venue of the
                  state and Federal courts of New York County, New York.
                </p>
                <br />
                <p className="terms-section">Modification.</p>
                <br />
                <p>
                  We reserve the right, in our sole discretion, to modify or
                  replace any of these Terms of Service, or change, suspend, or
                  discontinue the Services (including without limitation, the
                  availability of any feature, database, or content) at any time
                  by posting a notice on the Site or by sending you notice through
                  the Services, via e-mail or by another appropriate means of
                  electronic communication. We may also impose limits on certain
                  features and services or restrict your access to parts or all of
                  the Services without notice or liability. While we will timely
                  provide notice of modifications, it is also your responsibility
                  to check these Terms of Service periodically for changes. Your
                  continued use of the Services following notification of any
                  changes to these Terms of Service constitutes acceptance of
                  those changes, which will apply to your continued use of the
                  Services going forward. Your use of the Services is subject to
                  the Terms of Service in effect at the time of such use.
                </p>
                <br />
                <p className="terms-section">Miscellaneous.</p>
                <br />
                <p className="terms-section-part">
                  ENTIRE AGREEMENT AND SEVERABILITY.
                </p>
                <br />
                <p>
                  These Terms of Service are the entire agreement between you and
                  us with respect to the Services, including use of the Site, and
                  supersede all prior or contemporaneous communications and
                  proposals (whether oral, written or electronic) between you and
                  us with respect to the Services. If any provision of these Terms
                  of Service is found to be unenforceable or invalid, that
                  provision will be limited or eliminated to the minimum extent
                  necessary so that these Terms of Service will otherwise remain
                  in full force and effect and enforceable. The failure of either
                  party to exercise in any respect any right provided for herein
                  shall not be deemed a waiver of any further rights hereunder
                </p>
                <br />
                <p className="terms-section-part">FORCE MAJEURE.</p>
                <br />
                <p>
                  We shall not be liable for any failure to perform our
                  obligations hereunder where such failure results from any cause
                  beyond our reasonable control, including, without limitation,
                  mechanical, electronic or communications failure or degradation.
                </p>
                <br />
                <p className="terms-section-part">ASSIGNMENT.</p>
                <br />
                <p>
                  These Terms of Service are personal to you, and are not
                  assignable, transferable or sublicensable by you except with our
                  prior written consent. We may assign, transfer or delegate any
                  of our rights and obligations hereunder without consent.
                </p>
                <br />
                <p className="terms-section-part">AGENCY.</p>
                <br />
                <p>
                  No agency, partnership, joint venture, or employment
                  relationship is created as a result of these Terms of Service
                  and neither party has any authority of any kind to bind the
                  other in any respect.
                </p>
                <br />
                <p className="terms-section-part">NOTICES.</p>
                <br />
                <p>
                  Unless otherwise specified in these Term of Service, all notices
                  under these Terms of Service will be in writing and will be
                  deemed to have been duly given when received, if personally
                  delivered or sent by certified or registered mail, return
                  receipt requested; when receipt is electronically confirmed, if
                  transmitted by facsimile or e-mail; or the day after it is sent,
                  if sent for next day delivery by recognized overnight delivery
                  service. Electronic notices should be sent to support@fevo.com
                </p>
                <br />
                <p className="terms-section-part">NO WAIVER.</p>
                <br />
                <p>
                  Our failure to enforce any part of these Terms of Service shall
                  not constitute a waiver of our right to later enforce that or
                  any other part of these Terms of Service. Waiver of compliance
                  in any particular instance does not mean that we will waive
                  compliance in the future. In order for any waiver of compliance
                  with these Terms of Service to be binding, we must provide you
                  with written notice of such waiver through one of our authorized
                  representatives.
                </p>
                <br />
                <p className="terms-section-part">HEADINGS.</p>
                <br />
                <p>
                  The section and paragraph headings in these Terms of Service are
                  for convenience only and shall not affect their interpretation.
                </p>
                <br />
                <p className="terms-section">Contact.</p>
                <br />
                <p className="terms-section-part">
                  You may contact us at the following address: 373 Park Ave South,
                  Floor 5, New York, NY 10016
                </p>
                <br />
                <p className="terms-section-part">
                  Effective Date of Terms of Service: February 22, 2016
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
export default enhance(TermsPage);
