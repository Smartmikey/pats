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
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
