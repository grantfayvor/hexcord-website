import React, { useEffect } from "react";
import { BackButton } from "../components/Button";
import { NavLink } from "react-router-dom";

const TermsAndCondition = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      className="main__container"
      style={{ paddingTop: 10, paddingBottom: 10 }}
    >
      <main className="privacy__policy">
        <BackButton />
        <h1
          className="bold_41"
          style={{ marginTop: 14, marginBottom: 14, textAlign: "center", lineHeight: 1 }}
        >
          Terms & Conditions
        </h1>
        <h2
          className="privacy__policy__header"
          style={{ marginTop: 14, marginBottom: 14 }}
        >
          Introduction
        </h2>
        <p className="regular_16">
          Welcome to Hexcord!
          <br /> These terms and conditions outline the rules and regulations
          for the use of Hexcord's Website, located at hexcord.com.
          <br />
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use Hexcord if you do not agree to take
          all of the terms and conditions stated on this page. <br />
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements: "Client",
          "You" and "Your" refers to you, the person log on this website and
          compliant to the Company’s terms and conditions. "The Company",
          "Ourselves", "We", "Our" and "Us", refers to our Company. "Party",
          "Parties", or "Us", refers to both the Client and ourselves. All terms
          refer to the offer, acceptance and consideration of payment necessary
          to undertake the process of our assistance to the Client in the most
          appropriate manner for the express purpose of meeting the Client’s
          needs in respect of provision of the Company’s stated services, in
          accordance with and subject to, prevailing law of Netherlands. Any use
          of the above terminology or other words in the singular, plural,
          capitalization and/or he/she or they, are taken as interchangeable and
          therefore as referring to same.
        </p>
        <h2 className="privacy__policy__header" style={{ marginTop: 15 }}>
          Cookies
        </h2>

        <p className="regular_16">
          We employ the use of cookies. By accessing Hexcord, you agreed to use
          cookies in agreement with the Hexcord's Privacy Policy. Most
          interactive websites use cookies to let us retrieve the user’s details
          for each visit. Cookies are used by our website to enable the
          functionality of certain areas to make it easier for people visiting
          our website. Some of our affiliate/advertising partners may also use
          cookies.
        </p>

        <h2 className="privacy__policy__header" style={{ marginTop: 15 }}>
          License
        </h2>

        <p className="regular_16">
          Unless otherwise stated, Hexcord and/or its licensors own the
          intellectual property rights for all material on Hexcord. All
          intellectual property rights are reserved. You may access this from
          Hexcord for your own personal use subjected to restrictions set in
          these terms and conditions.
          <br />
          You must not:
        </p>

        <ul
          className="regular_16 "
          style={{ listStyle: "inside", marginTop: 10, marginBottom: 10 }}
        >
          <li>Republish material from Hexcord</li>
          <li>Sell, rent or sub-license material from Hexcord</li>
          <li>Reproduce, duplicate or copy material from Hexcord</li>
          <li>Redistribute content from Hexcord</li>
        </ul>

        <p className="regular_16">
          This Agreement shall begin on the date hereof. Our Terms and
          Conditions were created with the help of the Terms And Conditions
          Generator and the Privacy Policy Generator. Parts of this website
          offer an opportunity for users to post and exchange opinions and
          information in certain areas of the website. Hexcord does not filter,
          edit, publish or review Comments prior to their presence on the
          website. Comments do not reflect the views and opinions of Hexcord,its
          agents and/or affiliates. Comments reflect the views and opinions of
          the person who post their views and opinions. To the extent permitted
          by applicable laws, Hexcord shall not be liable for the Comments or
          for any liability, damages or expenses caused and/or suffered as a
          result of any use of and/or posting of and/or appearance of the
          Comments on this website. Hexcord reserves the right to monitor all
          Comments and to remove any Comments which can be considered
          inappropriate, offensive or causes breach of these Terms and
          Conditions. <br /> You warrant and represent that:
        </p>

        <ul
          className="regular_16 "
          style={{ listStyle: "inside", marginTop: 10, marginBottom: 10 }}
        >
          <li>
            You are entitled to post the Comments on our website and have all
            necessary licenses and consents to do so;
          </li>
          <li>
            The Comments do not invade any intellectual property right,
            including without limitation copyright, patent or trademark of any
            third party;
          </li>
          <li>
            The Comments do not contain any defamatory, libelous, offensive,
            indecent or otherwise unlawful material which is an invasion of
            privacy
          </li>
          <li>
            The Comments will not be used to solicit or promote business or
            custom or present commercial activities or unlawful activity.
          </li>
        </ul>

        <p className="regular_16">
          You hereby grant Hexcord a non-exclusive license to use, reproduce,
          edit and authorize others to use, reproduce and edit any of your
          Comments in any and all forms, formats or media.
        </p>
        <h2 className="privacy__policy__header" style={{ marginTop: 15 }}>
          Hyperlinking to our Content
        </h2>

        <p className="regular_16">
          The following organizations may link to our Website without prior
          written approval
        </p>

        <ul
          className="regular_16"
          style={{ listStyle: "inside", marginTop: 10, marginBottom: 10 }}
        >
          <li>Government agencies</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
          <li>
            Online directory distributors may link to our Website in the same
            manner as they hyperlink to the Websites of other listed businesses;
            and
          </li>
          <li>
            System wide Accredited Businesses except soliciting non-profit
            organizations, charity shopping malls, and charity fundraising
            groups which may not hyperlink to our Web site.
          </li>
        </ul>

        <p className="regular_16">
          These organizations may link to our home page, to publications or to
          other Website information so long as the link: (a) is not in any way
          deceptive; (b) does not falsely imply sponsorship, endorsement or
          approval of the linking party and its products and/or services; and
          (c) fits within the context of the linking party’s site.
          <br /> We may consider and approve other link requests from the
          following types of organizations:
        </p>
        <ul
          className="regular_16"
          style={{ listStyle: "inside", marginTop: 10, marginBottom: 10 }}
        >
          <li>commonly-known consumer and/or business information sources;</li>
          <li>dot.com community sites;</li>
          <li>associations or other groups representing charities;</li>
          <li>online directory distributors;</li>
          <li>internet portals;</li>
          <li>accounting, law and consulting firms; and</li>
          <li>educational institutions and trade associations.</li>
        </ul>
        <p className="regular_16">
          We will approve link requests from these organizations if we decide
          that: (a) the link would not make us look unfavorably to ourselves or
          to our accredited businesses; (b) the organization does not have any
          negative records with us; (c) the benefit to us from the visibility of
          the hyperlink compensates the absence of Hexcord; and (d) the link is
          in the context of general resource information. These organizations
          may link to our home page so long as the link: (a) is not in any way
          deceptive; (b) does not falsely imply sponsorship, endorsement or
          approval of the linking party and its products or services; and (c)
          fits within the context of the linking party’s site. If you are one of
          the organizations listed in paragraph 2 above and are interested in
          linking to our website, you must inform us by sending an e-mail to
          Hexcord. Please include your name, your organization name, contact
          information as well as the URL of your site, a list of any URLs from
          which you intend to link to our Website, and a list of the URLs on our
          site to which you would like to link. Wait 2-3 weeks for a response.
          <br /> Approved organizations may hyperlink to our Website as follows:
        </p>
        <ul
          className="regular_16 "
          style={{ listStyle: "inside", marginTop: 10, marginBottom: 10 }}
        >
          <li>By use of our corporate name; or</li>
          <li>By use of the uniform resource locator being linked to; or</li>
          <li>
            By use of any other description of our Website being linked to that
            makes sense within the context and format of content on the linking
            party’s site.
          </li>
        </ul>

        <p className="regular_16">
          No use of Hexcord's logo or other artwork will be allowed for linking
          absent a trademark license agreement.
        </p>

        <h2 className="privacy__policy__header" style={{ marginTop: 15 }}>
          iFrames
        </h2>
        <p className="regular_16">
          Without prior approval and written permission, you may not create
          frames around our Webpages that alter in any way the visual
          presentation or appearance of our Website.
        </p>
        <h2 className="privacy__policy__header mt-10">Content Liability</h2>
        <p className="regular_16">
          We shall not be hold responsible for any content that appears on your
          Website. You agree to protect and defend us against all claims that is
          rising on your Website. No link(s) should appear on any Website that
          may be interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the infringement or other
          violation of, any third party rights.
        </p>
        <p className="regular_16">
          When a recording is started while user is online, the recording data is
          uploaded in chunks to Hexcord's media server via a WebRTC connection. This
          is to reduce the time to save the recording at the end of the recording.
          However, if the recording is cancelled, the chunks would be discarded and if the
          recording is saved, the chunks would be combined and published directly to the users
          Google drive or Dropbox account. We do not store recordings internally. Ultimately,
          the user is in charge of their recording and can remove it at any time from their storage
          provider (Google Drive or Dropbox).
        </p>
        <h2 className="privacy__policy__header" style={{ marginTop: 15 }}>
          Your Privacy
        </h2>
        <p className="regular_16">
          Please read{" "}
          <NavLink to="/privacy-policy" className="text-primary">
            Privacy Policy
          </NavLink>
        </p>

        <h2 className="privacy__policy__header" style={{ marginTop: 15 }}>
          Reservation of Rights
        </h2>
        <p className="regular_16">
          We reserve the right to request that you remove all links or any
          particular link to our Website. You approve to immediately remove all
          links to our Website upon request. We also reserve the right to amen
          these terms and conditions and it’s linking policy at any time. By
          continuously linking to our Website, you agree to be bound to and
          follow these linking terms and conditions.
        </p>
        <h2>Removal of Links from our Website</h2>
        <p className="regular_16">
          If you find any link on our Website that is offensive for any reason,
          you are free to contact and inform us any moment. We will consider
          requests to remove links but we are not obligated to or so or to
          respond to you directly. We do not ensure that the information on this
          website is correct, we do not warrant its completeness or accuracy;
          nor do we promise to ensure that the website remains available or that
          the material on the website is kept up to date.
        </p>
        <h2 className="privacy__policy__header" style={{ marginTop: 15 }}>
          YouTube Access
        </h2>
        <p className="regular_16">
          By granting Hexcord permissions to your YouTube account, you agree to allow 
          Hexcord upload videos on your behalf to your YouTube channel and also create Live stream
          events on your channel on request by you. By using Hexcord, you agree to be bound by 
          the YouTube Terms of use as defined in the the Terms of Service <a href="https://www.youtube.com/t/terms">here</a>.
        </p>
        <h2 className="privacy__policy__header" style={{ marginTop: 15 }}>
          Google Drive Access
        </h2>
        <p className="regular_16">
          By granting Hexcord permissions to your Google Drive account, you agree to allow
          Hexcord upload videos on your behalf to your Drive. By using Hexcord, you agree to be bound by
          the Google Drive Terms of use as defined in the the Terms of Service <a href="https://www.google.com/drive/terms-of-service">here</a>.
        </p>
        <h2>Removal of Links from our Website</h2>
        <p className="regular_16">
          If you find any link on our Website that is offensive for any reason,
          you are free to contact and inform us any moment. We will consider
          requests to remove links but we are not obligated to or so or to
          respond to you directly. We do not ensure that the information on this
          website is correct, we do not warrant its completeness or accuracy;
          nor do we promise to ensure that the website remains available or that
          the material on the website is kept up to date.
        </p>
        <h2 className="privacy__policy__header" style={{ marginTop: 15 }}>
          Disclaimer
        </h2>
        <p className="regular_16">
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website. Nothing in this disclaimer will:
        </p>
        <ul
          className="regular_16"
          style={{ listStyle: "inside", marginTop: 10, marginBottom: 10 }}
        >
          <li>
            limit or exclude our or your liability for death or personal injury;
          </li>
          <li>
            limit or exclude our or your liability for fraud or fraudulent
            misrepresentation;
          </li>
          <li>
            limit any of our or your liabilities in any way that is not
            permitted under applicable law; or
          </li>
          <li>
            exclude any of our or your liabilities that may not be excluded
            under applicable law.
          </li>
        </ul>
        <p className="regular_16">
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph; and (b) govern all liabilities arising under the
          disclaimer, including liabilities arising in contract, in tort and for
          breach of statutory duty. As long as the website and the information
          and services on the website are provided free of charge, we will not
          be liable for any loss or damage of any nature.
        </p>
      </main>
    </section>
  );
};

export default TermsAndCondition;
