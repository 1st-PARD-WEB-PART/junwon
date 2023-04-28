import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: white;
  padding-left: 101px;
  padding-right: 201px;
  padding-top: 41px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  //비율 설정(넘칠 경우)
  gap: 16px;
  //자간 설정
  margin-bottom: 16px;
`;

const Link = styled.a`
  color: #65676b;
  font-size: 14px;
  line-height: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Language = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 8px;
`;

const LanguageLink = styled.a`
//styled.a = 링크
  color: #65676b;
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-decoration-line: none;
&:hover {
    text-decoration: underline;
  }
`;

const Facebook2023 = styled.div`
  color: #65676b;
  font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
`;

const HR = styled.hr`
margin-top: 14px;
margin-bottom: 22px;
`;

const footerLinks = [
    'Sign Up',
    'Log In',
    'Messenger',
    'Facebook Lite',
    'Mobile',
    'Find Friends',
    'Badges',
    'People',
    'Pages',
    'Places',
    'Games',
    'Locations',
    'Marketplace',
    'Facebook Pay',
    'Groups',
    'Oculus',
    'Portal',
    'Instagram',
    'Local',
    'Fundraisers',
    'Services',
    'About',
    'Create ad',
    'Create Page',
    'Developers',
    'Careers',
    'Privacy',
    'Cookies',
    'AdChoices',
    'Terms',
    'Help',
];

const languageLinks = [
    '한국어',
    'English (US)',
    'Espa?ol',
    'Fran?ais (France)',
    'Portugu?s (Brasil)',
    'Italiano',
    'Deutsch',
];

function Footer() {
    return (
        <FooterWrapper>
            <Language>

                {languageLinks.map((link) => (
                    <LanguageLink key={link} href="#">
                        {link}
                    </LanguageLink>
                ))}


            </Language>
            <HR></HR>
            
            <div className="footer-bottom">
                <FooterLinks>
                    {footerLinks.map((link) => (
                        <Link key={link} href="#">
                            {link}
                        </Link>
                    ))}
                </FooterLinks>
                <Facebook2023>meta ? 2023</Facebook2023>
            </div>
        </FooterWrapper>
    );
}

export default Footer;
