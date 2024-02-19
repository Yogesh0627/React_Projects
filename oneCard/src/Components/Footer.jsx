
import { handleApply } from "./Navigation ";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <div className="footer">
        <section className="bg-[#0c161b] h-fit p-5">
          <div className="flex flex-col items-center py-10">
            <div className="w-fit">
              <img
                className="w-16 h-10"
                src="https://www.getonecard.app/images/One_logo_white_59by336.svg"
                alt="onecard logo"
              />
            </div>
            <div className="my-8">
              <img src="https://www.getonecard.app/images/icons/crafted_with_love.svg" alt="" />
            </div>
            <div>
              <h2 className="text-[#0093f7] text-4xl font-extrabold font-serif">
                We are all ears!
              </h2>
            </div>
            <div className="text-white text-center text-xl my-6">
              <p> We are a new kid on the block, eager to learn.</p>
              <p> All ideas and suggestions are welcome.</p>
              <br />
              <button onClick={() => handleApply(navigate, "/apply")}
               className="bg-[#1893f7] w-44 h-12 text-lg text-white p-1 rounded-md font-bold font-serif">
                Apply Now
              </button>
            </div>
            <div className="text-white  text-center ">
              <h5 className="text-xl font-bold">FollowUs On</h5>
              <div className="flex gap-4 my-7">
                <a href="https://www.facebook.com/GetOneCardIN/" rel="noreferrer" target="_blank">
                <img
                  className="w-9 h-9"
                  src="src\images\Facebook_Logo.png"
                  alt="One-Card Facebook"
                /></a>
                <a href="https://twitter.com/GetOneCardIN" rel="noreferrer" target="_blank">
                <img
                  className="w-9 h-9"
                  src="src\images\Twiiter_Logo.png"
                  alt="One-Card Twitter"
                /></a>

                <a href="https://www.instagram.com/getonecardIN/" rel="noreferrer" target="_blank">
                <img
                  className="w-9 h-9"
                  src="src\images\Instagram_logo.png"
                  alt="One-Card InstaGram"
                /></a>

                <a href="https://www.linkedin.com/showcase/onecard-app/" rel="noreferrer" target="_blank">
                <img
                  className="w-9 h-9"
                  src="src\images\LinkedIn_Logo.png"
                  alt="One-Card LinkedIN"
                /></a>
                <a href="https://www.youtube.com/channel/UC3fK4HJd0FAL3y_ZgvQDGPg" rel="noreferrer" target="_blank">
                <img
                  className="w-12
                            a h-9"
                  src="src\images\youtube.png"
                  alt="One-Card Youtube"
                />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-28 m-auto  mb-6 w-fit p-4">
            <div className="text-[#0093f7] text-lg">
              <h3 className="text-white mb-5">OneCard</h3>
              <p>
                BOB Financial:
                <a href="">
                  <span> </span>MITC
                </a>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">T&C</a>
                </span>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">BT</a>
                </span>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">KFS</a>
                </span>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">OneCash</a>
                </span>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">EMI</a>
                </span>
                <span> </span>
              </p>

              <p>
                CSB Bank:
                <a href="">
                  <span> </span>MITC
                </a>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">T&C</a>
                </span>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">KFS</a>
                </span>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">EMI</a>
                </span>
                <span> </span>
              </p>

              <p>
                Federal Bank:
                <a href="">
                  <span> </span>MITC
                </a>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">T&C</a>
                </span>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">BT</a>
                </span>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">KFS</a>
                </span>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">FD</a>
                </span>
                <span> </span>
              </p>

              <p>
                IDFC FIRST Bank:
                <a href="">
                  <span> </span>MITC
                </a>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">T&C</a>
                </span>
                <span> </span>
              </p>

              <p>
                SBM Bank:
                <a href="">
                  <span> </span>FD
                </a>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">MITC</a>
                </span>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">KYC</a>
                </span>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">T&C</a>
                </span>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">KFS</a>
                </span>
                <span> </span>
              </p>

              <p>
                <a href="">SBM Customer Care Details</a>
              </p>
              <p>
                <a href="">SBM Grievance Details</a>
              </p>

              <p>
                South Indian Bank:
                <a href="">
                  <span> </span>MITC
                </a>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">T&C</a>
                </span>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">BT</a>
                </span>
                <span> </span>,
                <span>
                  {" "}
                  <a href="">KFS</a>
                </span>
                <span> </span>
              </p>

              <p>
                EMI:
                <a href="">
                  <span> </span>T&C
                </a>
                <span> </span>
              </p>
              <p>
                OneCash:
                <a href="">
                  <span> </span>T&C
                </a>
                <span> </span>
              </p>
            </div>

            <div className="text-[#0093f7] text-lg ">
              <h3 className="text-white mb-5"> Important Links</h3>
              <div>
                <p>Cookie Policy</p>
                <p>Do Not Disturb</p>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>Unparliamentary language</p>
                <p>Secure Usage Tips</p>
                <p>Authorized Collection Agencies</p>
                <p>Disclaimers</p>
              </div>
            </div>

            <div className="text-[#0093f7] text-lg ">
              <h3 className="text-white mb-5">Company</h3>
              <div>
                <p>About Us</p>
                <p>Join Us</p>
                <p>OneCard Offers</p>
                <p>Our Blog</p>
                <p>POSH @ Work</p>
                <p>OneScore</p>
              </div>
            </div>
          </div>

          <div className="m-auto w-fit  p-4 my-3">
            <div>
              <img
                className="w-96 h-20"
                src="https://www.getonecard.app/images/legal/Bank_Logos_1.png"
                alt=""
              />
            </div>

            <div className="flex m-8 gap-1 items-center justify-center flex-wrap">
              <img
                className="w-14 h-12"
                src="https://www.getonecard.app/images/about/das-iso27001.jpg"
                alt=""
              />
              <img
                className="w-14 h-14"
                src="https://www.getonecard.app/images/about/visa_service_provider.png"
                alt=""
              />
              <img
                className="w-14 h-6"
                src="https://www.getonecard.app/images/about/pci_dss.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="text-center text-xl text-white ">
            <p>
              Copyright © 2023 FPL Technologies Pvt. Ltd. All Rights Reserved.
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
