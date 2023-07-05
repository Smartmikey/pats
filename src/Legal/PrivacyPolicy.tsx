import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import Title from "../Common/Title";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <Box sx={{ my: 15, position: "relative" }}>
      <Title text="Privacy Policy" variation="large" align="center" />
      {/* Blobs */}
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blobs.png"
      />
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blobs-1.png"
      />
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blobs-2.png"
      />
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blobs-3.png"
      />
      <img
        style={{
          position: "absolute",
          top: `${Math.floor(Math.random() * 400)}px`,
          right: `${Math.floor(Math.random() * 1500)}px`,
          zIndex: -1,
        }}
        src="Blob-12.png"
      />
      {/* Blobs */}
      <Container sx={{ pl: { xs: 3, md: 20 } }}>
        <Typography variant="caption">Last updated: April 19, 2023</Typography>
        <Typography sx={{ mt: 3 }}>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </Typography>
        <Typography sx={{ mt: 3 }}>
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy.
        </Typography>
        <Title
          text="Interpretation and Definitions"
          sx={{ ml: 0 }}
          variation="medium"
        />
        <Title text="Interpretation" variation="small" sx={{ m: 0 }} />
        <Typography sx={{ mt: 2 }}>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </Typography>
        <Title text="Definitions" variation="small" sx={{ m: 1, ml: 0 }} />
        <Typography sx={{ mt: 2 }}>
          For the purposes of this Privacy Policy:
          <ul>
            <li>
              Account means a unique account created for You to access our
              Service or parts of our Service.
            </li>
            <li>
              Affiliate means an entity that controls, is controlled by or is
              under common control with a party, where "control" means ownership
              of 50% or more of the shares, equity interest or other securities
              entitled to vote for election of directors or other managing
              authority.
            </li>
            <li>
              Application refers to PATS, the software program provided by the
              Company.
            </li>
            <li>
              Business, for the purpose of CCPA/CPRA, refers to the Company as
              the legal entity that collects Consumers' personal information and
              determines the purposes and means of the processing of Consumers'
              personal information, or on behalf of which such information is
              collected and that alone, or jointly with others, determines the
              purposes and means of the processing of consumers' personal
              information, that does business in the State of California.
            </li>
            <li>
              CCPA and/or CPRA refers to California Consumer Privacy Act (the
              "CCPA") as amended by the California Privacy Rights Act of 2020
              (the "CPRA").
            </li>
            <li>
              Company (referred to as either "the Company", "We", "Us" or "Our"
              in this Agreement) refers to Paws & Tails Inc. , 3911 concord pike
              #8030 SMB#2766,Wilmington, DE 19803.
            </li>
            <li>
              Consumer, for the purpose of the CCPA/CPRA, means a natural person
              who is a California resident. A resident, as defined in the law,
              includes (1) every individual who is in the USA for other than a
              temporary or transitory purpose, and (2) every individual who is
              domiciled in the USA who is outside the USA for a temporary or
              transitory purpose.
            </li>
            <li>
              Cookies are small files that are placed on Your computer, mobile
              device or any other device by a website, containing the details of
              Your browsing history on that website among its many uses.
            </li>
            <li>Country refers to: Delaware, United States</li>
            <li>
              Device means any device that can access the Service such as a
              computer, a cellphone or a digital tablet.
            </li>
            <li>
              Do Not Track (DNT) is a concept that has been promoted by US
              regulatory authorities, in particular the U.S. Federal Trade
              Commission (FTC), for the Internet industry to develop and
              implement a mechanism for allowing internet users to control the
              tracking of their online activities across websites.
            </li>
            <li>
              Personal Data is any information that relates to an identified or
              identifiable individual. For the purposes of the CCPA/CPRA,
              Personal Data means any information that identifies, relates to,
              describes or is capable of being associated with, or could
              reasonably be linked, directly or indirectly, with You.
            </li>
            <li>Service refers to the Application or the Website or both</li>
            <li>
              Service Provider means any natural or legal person who processes
              the data on behalf of the Company. It refers to third-party
              companies or individuals employed by the Company to facilitate the
              Service, to provide the Service on behalf of the Company, to
              perform services related to the Service or to assist the Company
              in analyzing how the Service is used.
            </li>
            <li>
              Third-party Social Media Service refers to any website or any
              social network website through which a User can log in or create
              an account to use the Service.
            </li>
            <li>
              Usage Data refers to data collected automatically, either
              generated by the use of the Service or from the Service
              infrastructure itself (for example, the duration of a page visit).
            </li>
            <li>
              Website refers to PATS, accessible from{" "}
              <Link to="/">yourpats.com</Link>
            </li>
            <li>
              You means the individual accessing or using the Service, or the
              company, or other legal entity on behalf of which such individual
              is accessing or using the Service, as applicable.
            </li>
          </ul>
        </Typography>

        <Title
          text="Collecting and Using Your Personal Data"
          sx={{ ml: 0 }}
          // secondary="Types of Data Collected"
          variation="medium"
        />
        <Title
          // text="Collecting and Using Your Personal Data"
          sx={{ m: 0 }}
          text="Types of Data Collected"
          variation="medium"
        />
        <Title text="Personal Data" sx={{ m: 1, ml: 0 }} variation="small" />

        <Typography>
          While using Our Service, We may ask You to provide Us with certain
          personally identifiable information that can be used to contact or
          identify You. Personally identifiable information may include, but is
          not limited to:
          <ul>
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Phone number</li>
            <li>Address, State, Province, ZIP/Postal code, City</li>
          </ul>
        </Typography>
        <Title text="Usage Data" sx={{ m: 1, ml: 0 }} variation="small" />
        <Typography sx={{ mt: 2 }}>
          Usage Data is collected automatically when using the Service. Usage
          Data may include information such as Your Device's Internet Protocol
          address (e.g. IP address), browser type, browser version, the pages of
          our Service that You visit, the time and date of Your visit, the time
          spent on those pages, unique device identifiers and other diagnostic
          data.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          When You access the Service by or through a mobile device, We may
          collect certain information automatically, including, but not limited
          to, the type of mobile device You use, Your mobile device unique ID,
          the IP address of Your mobile device, Your mobile operating system,
          the type of mobile Internet browser You use, unique device identifiers
          and other diagnostic data.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          We may also collect information that Your browser sends whenever You
          visit our Service or when You access the Service by or through a
          mobile device.
        </Typography>
        <Title
          text="Information from Third-Party Social Media Services"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />
        <Typography sx={{ mt: 2 }}>
          The Company allows You to create an account and log in to use the
          Service through the following Third-party Social Media Services:
          <ul>
            <li>Google</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </Typography>
        <Typography sx={{ mt: 2 }}>
          If You decide to register through or otherwise grant us access to a
          Third-Party Social Media Service, We may collect Personal data that is
          already associated with Your Third-Party Social Media Service's
          account, such as Your name, Your email address, Your activities or
          Your contact list associated with that account.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          You may also have the option of sharing additional information with
          the Company through Your Third-Party Social Media Service's account.
          If You choose to provide such information and Personal Data, during
          registration or otherwise, You are giving the Company permission to
          use, share, and store it in a manner consistent with this Privacy
          Policy.
        </Typography>
        <Title
          text="Information Collected while Using the Application"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />
        <Typography sx={{ mt: 2 }}>
          While using Our Application, in order to provide features of Our
          Application, We may collect, with Your prior permission:
          <ul>
            <li>Information regarding your location</li>
            <li>
              Pictures and other information from your Device's camera and photo
              library
            </li>
          </ul>
        </Typography>
        <Typography sx={{ mt: 2 }}>
          We use this information to provide features of Our Service, to improve
          and customize Our Service. The information may be uploaded to the
          Company's servers and/or a Service Provider's server or it may be
          simply stored on Your device.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          You can enable or disable access to this information at any time,
          through Your Device settings.
        </Typography>
        <Title
          text="Tracking Technologies and Cookies"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />
        <Typography sx={{ mt: 2 }}>
          We use Cookies and similar tracking technologies to track the activity
          on Our Service and store certain information. Tracking technologies
          used are beacons, tags, and scripts to collect and track information
          and to improve and analyze Our Service. The technologies We use may
          include:
          <ul>
            <li>
              Cookies or Browser Cookies. A cookie is a small file placed on
              Your Device. You can instruct Your browser to refuse all Cookies
              or to indicate when a Cookie is being sent. However, if You do not
              accept Cookies, You may not be able to use some parts of our
              Service. Unless you have adjusted Your browser setting so that it
              will refuse Cookies, our Service may use Cookies.
            </li>
            <li>
              Web Beacons. Certain sections of our Service and our emails may
              contain small electronic files known as web beacons (also referred
              to as clear gifs, pixel tags, and single-pixel gifs) that permit
              the Company, for example, to count users who have visited those
              pages or opened an email and for other related website statistics
              (for example, recording the popularity of a certain section and
              verifying system and server integrity).
            </li>
            <li></li>
          </ul>
          Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies
          remain on Your personal computer or mobile device when You go offline,
          while Session Cookies are deleted as soon as You close Your web
          browser. Learn more about cookies on the Free Privacy Policy website
          article.
          <br />
        </Typography>
        <Typography sx={{ mt: 2 }}>
          We use both Session and Persistent Cookies for the purposes set out
          below:
          <ul>
            <li>Necessary / Essential Cookies</li>
            <p>
              Type: Session Cookies <br />
              Administered by: Us <br />
              Purpose: These Cookies are essential to provide You with services
              available through the Website and to enable You to use some of its
              features. They help to authenticate users and prevent fraudulent
              use of user accounts. Without these Cookies, the services that You
              have asked for cannot be provided, and We only use these Cookies
              to provide You with those services.
            </p>
            <li>Cookies Policy / Notice Acceptance Cookies</li>
            <p>
              Type: Persistent Cookies <br />
              Administered by: Us <br />
              Purpose: These Cookies identify if users have accepted the use of
              cookies on the Website.
            </p>
            <li>Functionality Cookies</li>
            <p>
              ype: Persistent Cookies <br />
              Administered by: Us <br />
              Purpose: These Cookies allow us to remember choices You make when
              You use the Website, such as remembering your login details or
              language preference. The purpose of these Cookies is to provide
              You with a more personal experience and to avoid You having to
              re-enter your preferences every time You use the Website.
            </p>
            <li>Tracking and Performance Cookies</li>
            <p>
              Type: Persistent Cookies <br />
              Administered by: Third-Parties
              <br />
              Purpose: These Cookies are used to track information about traffic
              to the Website and how users use the Website. The information
              gathered via these Cookies may directly or indirectly identify you
              as an individual visitor. This is because the information
              collected is typically linked to a pseudonymous identifier
              associated with the device you use to access the Website. We may
              also use these Cookies to test new pages, features or new
              functionality of the Website to see how our users react to them.
            </p>
            <p>
              For more information about the cookies we use and your choices
              regarding cookies, please visit our Cookies Policy or the Cookies
              section of our Privacy Policy.
            </p>
          </ul>
        </Typography>
        <Title
          text="Use of Your Personal Data"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />
        <Typography>
          The Company may use Personal Data for the following purposes:
          <ul>
            <li>
              To provide and maintain our Service, including to monitor the
              usage of our Service.
            </li>
            <li>
              To manage Your Account: to manage Your registration as a user of
              the Service. The Personal Data You provide can give You access to
              different functionalities of the Service that are available to You
              as a registered user.
            </li>
            <li>
              For the performance of a contract: the development, compliance and
              undertaking of the purchase contract for the products, items or
              services You have purchased or of any other contract with Us
              through the Service.
            </li>
            <li>
              To contact You: To contact You by email, telephone calls, SMS, or
              other equivalent forms of electronic communication, such as a
              mobile application's push notifications regarding updates or
              informative communications related to the functionalities,
              products or contracted services, including the security updates,
              when necessary or reasonable for their implementation.
            </li>
            <li>
              To provide You with news, special offers and general information
              about other goods, services and events which we offer that are
              similar to those that you have already purchased or enquired about
              unless You have opted not to receive such information.
            </li>
            <li>
              To manage Your requests: To attend and manage Your requests to Us.
            </li>
            <li>
              For business transfers: We may use Your information to evaluate or
              conduct a merger, divestiture, restructuring, reorganization,
              dissolution, or other sale or transfer of some or all of Our
              assets, whether as a going concern or as part of bankruptcy,
              liquidation, or similar proceeding, in which Personal Data held by
              Us about our Service users is among the assets transferred.
            </li>
            <li>
              For other purposes: We may use Your information for other
              purposes, such as data analysis, identifying usage trends,
              determining the effectiveness of our promotional campaigns and to
              evaluate and improve our Service, products, services, marketing
              and your experience.
            </li>
          </ul>
          <p>
            We may share Your personal information in the following situations:
          </p>
          <ul>
            <li>
              With Service Providers: We may share Your personal information
              with Service Providers to monitor and analyze the use of our
              Service, for payment processing, to contact You.
            </li>
            <li>
              For business transfers: We may share or transfer Your personal
              information in connection with, or during negotiations of, any
              merger, sale of Company assets, financing, or acquisition of all
              or a portion of Our business to another company.
            </li>
            <li>
              With Affiliates: We may share Your information with Our
              affiliates, in which case we will require those affiliates to
              honor this Privacy Policy. Affiliates include Our parent company
              and any other subsidiaries, joint venture partners or other
              companies that We control or that are under common control with
              Us.
            </li>
            <li>
              With business partners: We may share Your information with Our
              business partners to offer You certain products, services or
              promotions.
            </li>
            <li>
              With other users: when You share personal information or otherwise
              interact in the public areas with other users, such information
              may be viewed by all users and may be publicly distributed
              outside. If You interact with other users or register through a
              Third-Party Social Media Service, Your contacts on the Third-Party
              Social Media Service may see Your name, profile, pictures and
              description of Your activity. Similarly, other users will be able
              to view descriptions of Your activity, communicate with You and
              view Your profile.
            </li>
            <li>
              With Your consent: We may disclose Your personal information for
              any other purpose with Your consent.
            </li>
          </ul>
        </Typography>
        <Title
          text="Retention of Your Personal Data"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />
        <Typography>
          The Company will retain Your Personal Data only for as long as is
          necessary for the purposes set out in this Privacy Policy. We will
          retain and use Your Personal Data to the extent necessary to comply
          with our legal obligations (for example, if we are required to retain
          your data to comply with applicable laws), resolve disputes, and
          enforce our legal agreements and policies.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          The Company will also retain Usage Data for internal analysis
          purposes. Usage Data is generally retained for a shorter period of
          time, except when this data is used to strengthen the security or to
          improve the functionality of Our Service, or We are legally obligated
          to retain this data for longer time periods.
        </Typography>
        <Title
          text="Transfer of Your Personal Data"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />
        <Typography>
          Your information, including Personal Data, is processed at the
          Company's operating offices and in any other places where the parties
          involved in the processing are located. It means that this information
          may be transferred to — and maintained on — computers located outside
          of Your state, province, country or other governmental jurisdiction
          where the data protection laws may differ than those from Your
          jurisdiction.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Your consent to this Privacy Policy followed by Your submission of
          such information represents Your agreement to that transfer.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          The Company will take all steps reasonably necessary to ensure that
          Your data is treated securely and in accordance with this Privacy
          Policy and no transfer of Your Personal Data will take place to an
          organization or a country unless there are adequate controls in place
          including the security of Your data and other personal information.
        </Typography>
        <Title
          text="Delete Your Personal Data"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />
        <Typography>
          You have the right to delete or request that We assist in deleting the
          Personal Data that We have collected about You.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Our Service may give You the ability to delete certain information
          about You from within the Service.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          You may update, amend, or delete Your information at any time by
          signing in to Your Account, if you have one, and visiting the account
          settings section that allows you to manage Your personal information.
          You may also contact Us to request access to, correct, or delete any
          personal information that You have provided to Us.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Please note, however, that We may need to retain certain information
          when we have a legal obligation or lawful basis to do so.
        </Typography>
        <Title
          text="Disclosure of Your Personal Data"
          sx={{ m: 1, ml: 0 }}
          variation="medium"
        />
        <Title
          text="Business Transactions"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />
        <Typography>
          If the Company is involved in a merger, acquisition or asset sale,
          Your Personal Data may be transferred. We will provide notice before
          Your Personal Data is transferred and becomes subject to a different
          Privacy Policy.
        </Typography>
        <Title text="Law enforcement" sx={{ m: 1, ml: 0 }} variation="small" />
        <Typography sx={{ mt: 2 }}>
          Under certain circumstances, the Company may be required to disclose
          Your Personal Data if required to do so by law or in response to valid
          requests by public authorities (e.g. a court or a government agency).
        </Typography>
        <Title
          text="Other legal requirements"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />
        <Typography sx={{ mt: 2 }}>
          The Company may disclose Your Personal Data in the good faith belief
          that such action is necessary to:
          <ul>
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of the Company</li>
            <li>
              Prevent or investigate possible wrongdoing in connection with the
              Service
            </li>
            <li>
              Protect the personal safety of Users of the Service or the public
            </li>
            <li>Protect against legal liability</li>
          </ul>
        </Typography>
        <Title
          text="Security of Your Personal Data"
          sx={{ m: 1, ml: 0 }}
          variation="medium"
        />
        <Typography sx={{ mt: 2 }}>
          The security of Your Personal Data is important to Us, but remember
          that no method of transmission over the Internet, or method of
          electronic storage is 100% secure. While We strive to use commercially
          acceptable means to protect Your Personal Data, We cannot guarantee
          its absolute security.
        </Typography>
        <Title
          text="Detailed Information on the Processing of Your Personal Data"
          sx={{ m: 1, ml: 0 }}
          variation="medium"
        />
        <Typography sx={{ mt: 2 }}>
          The Service Providers We use may have access to Your Personal Data.
          These third-party vendors collect, store, use, process and transfer
          information about Your activity on Our Service in accordance with
          their Privacy Policies.
        </Typography>
        <Title text="Analytics" sx={{ m: 1, ml: 0 }} variation="small" />
        <Typography sx={{ mt: 2 }}>
          We may use third-party Service providers to monitor and analyze the
          use of our Service.
          <ul>
            <li>Google Analytics</li>
          </ul>
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Google Analytics is a web analytics service offered by Google that
          tracks and reports website traffic. Google uses the data collected to
          track and monitor the use of our Service. This data is shared with
          other Google services. Google may use the collected data to
          contextualize and personalize the ads of its own advertising network.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          You can opt-out of having made your activity on the Service available
          to Google Analytics by installing the Google Analytics opt-out browser
          add-on. The add-on prevents the Google Analytics JavaScript (ga.js,
          analytics.js and dc.js) from sharing information with Google Analytics
          about visits activity.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          You may opt-out of certain Google Analytics features through your
          mobile device settings, such as your device advertising settings or by
          following the instructions provided by Google in their Privacy Policy:{" "}
          <Link to="https://policies.google.com/privacy" target="_blank">
            https://policies.google.com/privacy
          </Link>
          .
        </Typography>
        <Typography sx={{ mt: 2 }}>
          For more information on the privacy practices of Google, please visit
          the Google Privacy & Terms web page:{" "}
          <Link to="https://policies.google.com/privacy" target="_blank">
            https://policies.google.com/privacy
          </Link>
          .
        </Typography>
        <Title text="Email Marketing" sx={{ m: 1, ml: 0 }} variation="small" />
        <Typography sx={{ mt: 2 }}>
          We may use Your Personal Data to contact You with newsletters,
          marketing or promotional materials and other information that may be
          of interest to You. You may opt-out of receiving any, or all, of these
          communications from Us by following the unsubscribe link or
          instructions provided in any email We send or by contacting Us.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          We may use Email Marketing Service Providers to manage and send emails
          to You.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <ul>
            <li>Mailchimp</li>
          </ul>
          Mailchimp is an email marketing sending service provided by The Rocket
          Science Group LLC.
          <br />
          For more information on the privacy practices of Mailchimp, please
          visit their Privacy policy:{" "}
          <Link to="https://mailchimp.com/legal/privacy/" target="_blank">
            https://mailchimp.com/legal/privacy/
          </Link>
        </Typography>
        <Title text="Payments" sx={{ m: 1, ml: 0 }} variation="small" />
        <Typography sx={{ mt: 2 }}>
          We may provide paid products and/or services within the Service. In
          that case, we may use third-party services for payment processing
          (e.g. payment processors).
        </Typography>
        <Typography sx={{ mt: 2 }}>
          We will not store or collect Your payment card details. That
          information is provided directly to Our third-party payment processors
          whose use of Your personal information is governed by their Privacy
          Policy. These payment processors adhere to the standards set by
          PCI-DSS as managed by the PCI Security Standards Council, which is a
          joint effort of brands like Visa, Mastercard, American Express and
          Discover. PCI-DSS requirements help ensure the secure handling of
          payment information. to You.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          <ul>
            <li>Stripe</li>
          </ul>
          Their Privacy Policy can be viewed at{" "}
          <Link to="https://stripe.com/us/privacy" target="_blank">
            https://stripe.com/us/privacy
          </Link>
        </Typography>
        <Title
          text="CCPA/CPRA Privacy Notice"
          sx={{ m: 1, ml: 0 }}
          variation="medium"
        />
        <Typography sx={{ mt: 2 }}>
          This privacy notice section for California residents supplements the
          information contained in Our Privacy Policy and it applies solely to
          all visitors, users, and others who reside in the State of California.
        </Typography>

        <Title
          text="Categories of Personal Information Collected"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />
        <Typography sx={{ mt: 2 }}>
          We collect information that identifies, relates to, describes,
          references, is capable of being associated with, or could reasonably
          be linked, directly or indirectly, with a particular Consumer or
          Device. The following is a list of categories of personal information
          which we may collect or may have been collected from California
          residents within the last twelve (12) months.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          Please note that the categories and examples provided in the list
          below are those defined in the CCPA/CPRA. This does not mean that all
          examples of that category of personal information were in fact
          collected by Us, but reflects our good faith belief to the best of Our
          knowledge that some of that information from the applicable category
          may be and may have been collected. For example, certain categories of
          personal information would only be collected if You provided such
          personal information directly to Us.
          <ul>
            <li>
              Category A: Identifiers.{" "}
              <p>
                Examples: A real name, alias, postal address, unique personal
                identifier, online identifier, Internet Protocol address, email
                address, account name, driver's license number, passport number,
                or other similar identifiers.
              </p>
              <p>Collected: Yes.</p>
            </li>
            <li>
              Category B: Personal information categories listed in the
              California Customer Records statute (Cal. Civ. Code § 1798.80(e)).
              <p>
                Examples: A name, signature, Social Security number, physical
                characteristics or description, address, telephone number,
                passport number, driver's license or state identification card
                number, insurance policy number, education, employment,
                employment history, bank account number, credit card number,
                debit card number, or any other financial information, medical
                information, or health insurance information. Some personal
                information included in this category may overlap with other
                categories.
              </p>
              <p>Collected: Yes.</p>
            </li>
            <li>
              Category C: Protected classification characteristics under
              California or federal law.
              <p>
                Examples: Age (40 years or older), race, color, ancestry,
                national origin, citizenship, religion or creed, marital status,
                medical condition, physical or mental disability, sex (including
                gender, gender identity, gender expression, pregnancy or
                childbirth and related medical conditions), sexual orientation,
                veteran or military status, genetic information (including
                familial genetic information).
              </p>
              <p>Collected: No.</p>
            </li>
            <li>
              Category D: Commercial information.
              <p>
                Examples: Records and history of products or services purchased
                or considered.
              </p>
              <p>Collected: Yes.</p>
            </li>
            <li>
              Category E: Biometric information.
              <p>
                Examples: Genetic, physiological, behavioral, and biological
                characteristics, or activity patterns used to extract a template
                or other identifier or identifying information, such as,
                fingerprints, faceprints, and voiceprints, iris or retina scans,
                keystroke, gait, or other physical patterns, and sleep, health,
                or exercise data.
              </p>
              <p>Collected: No.</p>
            </li>
            <li>
              Category F: Internet or other similar network activity.
              <p>Examples: Interaction with our Service or advertisement.</p>
              <p>Collected: Yes.</p>
            </li>
            <li>
              Category G: Geolocation data.
              <p>Examples: Approximate physical location. </p>
              <p>Collected: Yes.</p>
            </li>
            <li>
              Category H: Sensory data.
              <p>
                Examples: Audio, electronic, visual, thermal, olfactory, or
                similar information.{" "}
              </p>
              <p>Collected: No.</p>
            </li>
            <li>
              Category I: Professional or employment-related information.{" "}
              <p>
                Examples: Current or past job history or performance
                evaluations.{" "}
              </p>
              <p>Collected: No.</p>
            </li>
            <li>
              Category J: Non-public education information (per the Family
              Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34
              C.F.R. Part 99)).
              <p>
                Examples: Education records directly related to a student
                maintained by an educational institution or party acting on its
                behalf, such as grades, transcripts, class lists, student
                schedules, student identification codes, student financial
                information, or student disciplinary records.
              </p>
              <p>Collected: No.</p>
            </li>
            <li>
              Category K: Inferences drawn from other personal information.
              <p>
                Examples: Profile reflecting a person's preferences,
                characteristics, psychological trends, predispositions,
                behavior, attitudes, intelligence, abilities, and aptitudes.
              </p>
              <p>Collected: No.</p>
            </li>
            <li>
              Category L: Sensitive personal information.
              <p>
                Examples: Account login and password information, geolocation
                data.
              </p>
              <p>Collected: Yes.</p>
            </li>
            <p>Under CCPA/CPRA, personal information does not include:</p>
            <li>Publicly available information from government records</li>
            <li>Deidentified or aggregated consumer information</li>
            <li>
              Information excluded from the CCPA/CPRA's scope, such as:
              <ul>
                <li>
                  Health or medical information covered by the Health Insurance
                  Portability and Accountability Act of 1996 (HIPAA) and the
                  California Confidentiality of Medical Information Act (CMIA)
                  or clinical trial data
                </li>
                <li>
                  Personal Information covered by certain sector-specific
                  privacy laws, including the Fair Credit Reporting Act (FRCA),
                  the Gramm-Leach-Bliley Act (GLBA) or California Financial
                  Information Privacy Act (FIPA), and the Driver's Privacy
                  Protection Act of 1994
                </li>
              </ul>
            </li>
          </ul>
        </Typography>
        <Title
          text="Sources of Personal Information"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />
        <Typography sx={{ mt: 2 }}>
          We obtain the categories of personal information listed above from the
          following categories of sources:
          <ul>
            <li>
              Directly from You. For example, from the forms You complete on our
              Service, preferences You express or provide through our Service,
              or from Your purchases on our Service.
            </li>
            <li>
              Indirectly from You. For example, from observing Your activity on
              our Service.
            </li>
            <li>
              Automatically from You. For example, through cookies We or our
              Service Providers set on Your Device as You navigate through our
              Service.
            </li>
            <li>
              From Service Providers. For example, third-party vendors to
              monitor and analyze the use of our Service, third-party vendors
              for payment processing, or other third-party vendors that We use
              to provide the Service to You.
            </li>
          </ul>
        </Typography>
        <Title
          text="Use of Personal Information"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />
        <Typography sx={{ mt: 2 }}>
          We may use or disclose personal information We collect for "business
          purposes" or "commercial purposes" (as defined under the CCPA/CPRA),
          which may include the following examples:
          <ul>
            <li>To operate our Service and provide You with Our Service.</li>
            <li>
              To provide You with support and to respond to Your inquiries,
              including to investigate and address Your concerns and monitor and
              improve our Service.
            </li>
            <li>
              To fulfill or meet the reason You provided the information. For
              example, if You share Your contact information to ask a question
              about our Service, We will use that personal information to
              respond to Your inquiry. If You provide Your personal information
              to purchase a product or service, We will use that information to
              process Your payment and facilitate delivery.
            </li>
            <li>
              To respond to law enforcement requests and as required by
              applicable law, court order, or governmental regulations.
            </li>
            <li>
              As described to You when collecting Your personal information or
              as otherwise set forth in the CCPA/CPRA.
            </li>
            <li>For internal administrative and auditing purposes.</li>
            <li>
              To detect security incidents and protect against malicious,
              deceptive, fraudulent or illegal activity, including, when
              necessary, to prosecute those responsible for such activities.
            </li>
            <li>Other one-time uses.</li>
          </ul>
          <p>
            Please note that the examples provided above are illustrative and
            not intended to be exhaustive. For more details on how we use this
            information, please refer to the "Use of Your Personal Data"
            section.
            <br />
            If We decide to collect additional categories of personal
            information or use the personal information We collected for
            materially different, unrelated, or incompatible purposes We will
            update this Privacy Policy.
          </p>
        </Typography>
        <Title
          text="Disclosure of Personal Information"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />
        <Typography sx={{ mt: 2 }}>
          We may use or disclose and may have used or disclosed in the last
          twelve (12) months the following categories of personal information
          for business or commercial purposes:
          <ul>
            <li>Category A: Identifiers</li>
            <li>
              Category B: Personal information categories listed in the
              California Customer Records statute (Cal. Civ. Code § 1798.80(e))
            </li>
            <li>Category D: Commercial information</li>
            <li>Category F: Internet or other similar network activity</li>
            <li>Category G: Geolocation data</li>
            <li>Category L: Sensitive personal information</li>
          </ul>
          <p>
            Please note that the categories listed above are those defined in
            the CCPA/CPRA. This does not mean that all examples of that category
            of personal information were in fact disclosed, but reflects our
            good faith belief to the best of our knowledge that some of that
            information from the applicable category may be and may have been
            disclosed.
            <br />
            When We disclose personal information for a business purpose or a
            commercial purpose, We enter a contract that describes the purpose
            and requires the recipient to both keep that personal information
            confidential and not use it for any purpose except performing the
            contract.
          </p>
        </Typography>
        <Title
          text="Share of Personal Information"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />
        <Typography sx={{ mt: 2 }}>
          We may share, and have shared in the last twelve (12) months, Your
          personal information identified in the above categories with the
          following categories of third parties:
          <ul>
            <li>Service Providers</li>
            <li>Payment processors</li>
            <li>Our affiliates</li>
            <li>Our business partners</li>
            <li>
              Third party vendors to whom You or Your agents authorize Us to
              disclose Your personal information in connection with products or
              services We provide to You
            </li>
          </ul>
        </Typography>
        <Title
          text="Sale of Personal Information"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />

        <Typography sx={{ mt: 2 }}>
          As defined in the CCPA/CPRA, "sell" and "sale" mean selling, renting,
          releasing, disclosing, disseminating, making available, transferring,
          or otherwise communicating orally, in writing, or by electronic or
          other means, a Consumer's personal information by the Business to a
          third party for valuable consideration. This means that We may have
          received some kind of benefit in return for sharing personal
          information, but not necessarily a monetary benefit.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          We do not sell personal information as the term sell is commonly
          understood. We do allow Service Providers to use Your personal
          information for the business purposes described in Our Privacy Policy,
          for activities such as advertising, marketing, and analytics, and
          these may be deemed a sale under CCPA/CPRA.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          We may sell and may have sold in the last twelve (12) months the
          following categories of personal information:
          <ul>
            <li>Category A: Identifiers</li>
            <li>
              Category B: Personal information categories listed in the
              California Customer Records statute (Cal. Civ. Code § 1798.80(e))
            </li>
            <li>Category D: Commercial information</li>
            <li>Category F: Internet or other similar network activity</li>
            <li>Category G: Geolocation data</li>
            <li>Category L: Sensitive personal information</li>

            <p>
              Please note that the categories listed above are those defined in
              the CCPA/CPRA. This does not mean that all examples of that
              category of personal information were in fact sold, but reflects
              our good faith belief to the best of Our knowledge that some of
              that information from the applicable category may be and may have
              been shared for value in return.
            </p>
          </ul>
        </Typography>
        <Title
          text="Sale of Personal Information of Minors Under 16 Years of Age"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />

        <Typography sx={{ mt: 2 }}>
          We do not knowingly collect personal information from minors under the
          age of 16 through our Service, although certain third party websites
          that we link to may do so. These third-party websites have their own
          terms of use and privacy policies and We encourage parents and legal
          guardians to monitor their children's Internet usage and instruct
          their children to never provide information on other websites without
          their permission.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          We do not sell the personal information of Consumers We actually know
          are less than 16 years of age, unless We receive affirmative
          authorization (the "right to opt-in") from either the Consumer who is
          between 13 and 16 years of age, or the parent or guardian of a
          Consumer less than 13 years of age. Consumers who opt-in to the sale
          of personal information may opt-out of future sales at any time. To
          exercise the right to opt-out, You (or Your authorized representative)
          may submit a request to Us by contacting Us.
        </Typography>
        <Typography sx={{ mt: 2 }}>
          If You have reason to believe that a child under the age of 13 (or 16)
          has provided Us with personal information, please contact Us with
          sufficient detail to enable Us to delete that information.
        </Typography>
        <Title
          text="Your Rights under the CCPA/CPRA"
          sx={{ m: 1, ml: 0 }}
          variation="small"
        />

        <Typography sx={{ mt: 2 }}>
          The CCPA/CPRA provides California residents with specific rights
          regarding their personal information. If You are a resident of
          California, You have the following rights:
        </Typography>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
