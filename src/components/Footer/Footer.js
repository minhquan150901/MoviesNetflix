import { GiPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import styled from "styled-components";

function Footer() {
    return ( 
        <FooterPage>
            <div>
                <p>&copy; copyright MINH QUAN</p>
                <p className="contact">Liên hệ :
                    <a href="#" className="phoneIcon">
                        <GiPhone /> 
                        <p className="phoneIcon-text">0386039618</p>
                    </a>
                    <a href="#" className="emailIcon">
                        <MdEmail />
                        <p className="emailIcon-text">phungminhquan.tl5@gmail.com</p>
                    </a>
                </p>
            </div>
        </FooterPage>
    );
}

export default Footer;

const FooterPage =styled.div`
    background-color: var(--color-background);
    color: var(--color-white);
    padding: 20px 20px 20px;
    position: relative;
    text-align: center;

        .contact {
            display: flex;
            flex-direction: column;
            align-items: center;

            .phoneIcon, .emailIcon {
                display: flex;
                font-size: 16px;
                align-items: center;

                .phoneIcon-text, .emailIcon-text {
                    margin-left: 4px;
                }
            }
        }
`