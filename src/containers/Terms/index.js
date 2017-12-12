/**
 * Terms container
 */
import React, { Component } from 'react';
import { App, TextPage, Footer } from '../../components';

export default class Privacy extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    window.document.title = 'Terms of Service | Hollowverse';
  }

  render() {
    return (
      <App isSearchButton>
        <TextPage>
          <h1>Terms of Service</h1>
          <h2>1. Terms</h2>
          <p>
            By accessing this web site, you are agreeing to be bound by
            these web site Terms and Conditions of Use, all applicable
            laws and regulations, and agree that you are responsible for
            compliance with any applicable local laws. If you do not agree
            with any of these terms, you are prohibited from using or
            accessing this site. The materials contained in this web site
            are protected by applicable copyright and trade mark law.
          </p>
          <h2>2. Use License</h2>
          <ol>
            <li>Permission is granted to temporarily download one copy of the
              materials (information or software) on Hollowverse’s web site for
              personal, non-commercial transitory viewing only. This is the grant
              of a license, not a transfer of title, and under this license you may not:
              <ol type="A">
                <li>modify or copy the materials;</li>
                <li>use the materials for any commercial purpose, or for any public
                  display (commercial or non-commercial);
                </li>
                <li>attempt to decompile or reverse engineer any software contained
                  on Hollowverse’s web site;
                </li>
                <li>remove any copyright or other proprietary notations from the materials; or</li>
                <li>transfer the materials to another person or “mirror” the materials
                  on any other server.
                </li>
              </ol>
            </li>
            <li>This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by Hollowverse at any time.
              Upon terminating your viewing of these materials or upon the termination
              of this license, you must destroy any downloaded materials in your
              possession whether in electronic or printed format.
            </li>
          </ol>
          <h2>3. Disclaimer</h2>
          <p>The materials on Hollowverse’s web site are provided “as is”.
            Hollowverse makes no warranties, expressed or implied, and hereby
            disclaims and negates all other warranties, including without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of intellectual
            property or other violation of rights. Further, Hollowverse does not
            warrant or make any representations concerning the accuracy, likely
            results, or reliability of the use of the materials on its Internet
            web site or otherwise relating to such materials or on any sites
            linked to this site.
          </p>
          <h2>4. Limitations</h2>
          <p>In no event shall Hollowverse or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data
            or profit, or due to business interruption,) arising out of the
            use or inability to use the materials on Hollowverse’s Internet
            site, even if Hollowverse or a Hollowverse authorized representative
            has been notified orally or in writing of the possibility of such
            damage. Because some jurisdictions do not allow limitations on
            implied warranties, or limitations of liability for consequential
            or incidental damages, these limitations may not apply to you.
          </p>
          <h2>5. Revisions and Errata</h2>
          <p>The materials appearing on Hollowverse’s web site could include
            technical, typographical, or photographic errors. Hollowverse
            does not warrant that any of the materials on its web site are
            accurate, complete, or current. Hollowverse may make changes to the
            materials contained on its web site at any time without notice.
            Hollowverse does not, however, make any commitment to update the materials.
          </p>
          <h2>6. Links</h2>
          <p>Hollowverse has not reviewed all of the sites linked to its Internet
            web site and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by Hollowverse
            of the site. Use of any such linked web site is at the user’s own risk.
          </p>
          <h2>7. Site Terms of Use Modifications</h2>
          <p>Hollowverse may revise these terms of use for its web site at any
            time without notice. By using this web site you are agreeing to
            be bound by the then current version of these Terms and Conditions of Use.
          </p>
          <h2>8. Governing Law</h2>
          <p>Any claim relating to Hollowverse’s web site shall be governed
            by the laws of the State of Texas without regard to its conflict
            of law provisions.
          </p>
          <p>General Terms and Conditions applicable to Use of a Web Site.</p>
        </TextPage>
        <Footer />
      </App>
    );
  }
}

