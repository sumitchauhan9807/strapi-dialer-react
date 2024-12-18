import { useRef } from "react";

function Navigation() {

  const dropdown1 = useRef(null);
  const dropdown2 = useRef(null);
  const dropdown3 = useRef(null);
  const dropdown4 = useRef(null);
  
  const showSubNav = (dropdownRef) => {
    mouseLeave()
    console.log(dropdownRef)
    dropdownRef.current.classList.add('jet-menu-hover')
  }

  const mouseLeave = () =>{
    dropdown1.current.classList.remove('jet-menu-hover')
    dropdown2.current.classList.remove('jet-menu-hover')
    dropdown3.current.classList.remove('jet-menu-hover')
    dropdown4.current.classList.remove('jet-menu-hover')
  }
  return (
<>
<div data-elementor-type="header" data-elementor-id={27018} className="elementor elementor-27018 elementor-location-header" data-elementor-post-type="elementor_library">
          <section className="elementor-section elementor-top-section elementor-element elementor-element-61adf05 elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="61adf05" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9b5a02b" data-id="9b5a02b" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-17c1663 elementor-icon-list--layout-inline elementor-widget__width-auto elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="17c1663" data-element_type="widget" data-widget_type="icon-list.default">
                    <div className="elementor-widget-container">
                      <link rel="stylesheet" href="https://callcenterstudio.com/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css" />
                      <ul className="elementor-icon-list-items elementor-inline-items">
                        <li className="elementor-icon-list-item elementor-inline-item">
                          <a href="tel:+908502000256" data-wpel-link="internal">
                            <span className="elementor-icon-list-text"><span style={{color: '#f47a00'}}>+90 850 200 02 56</span></span>
                          </a>
                        </li>
                        <li className="elementor-icon-list-item elementor-inline-item">
                          <a href="https://support.callcenterstudio.com/portal/en/home" data-wpel-link="external" rel="nofollow external noopener noreferrer">
                            <span className="elementor-icon-list-text">Support</span>
                          </a>
                        </li>
                        <li className="elementor-icon-list-item elementor-inline-item">
                          <a href="https://callcenterstudio.com/user-manual/" data-wpel-link="internal">
                            <span className="elementor-icon-list-text">User Manual</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-ad36c95 elementor-search-form--skin-full_screen elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-search-form" data-id="ad36c95" data-element_type="widget" data-settings="{&quot;skin&quot;:&quot;full_screen&quot;}" data-widget_type="search-form.default">
                    <div className="elementor-widget-container">
                      <link rel="stylesheet" href="https://callcenterstudio.com/wp-content/plugins/elementor-pro/assets/css/widget-theme-elements.min.css" />
                      <search role="search">
                        <form className="elementor-search-form" action="https://callcenterstudio.com" method="get">
                          <div className="elementor-search-form__toggle" tabIndex={0} role="button">
                            <i aria-hidden="true" className="fas fa-search" />					<span className="elementor-screen-only">Search</span>
                          </div>
                          <div className="elementor-search-form__container">
                            <label className="elementor-screen-only" htmlFor="elementor-search-form-ad36c95">Search</label>
                            <input id="elementor-search-form-ad36c95" placeholder="Search..." className="elementor-search-form__input" type="search" name="s" defaultValue />
                            <div className="dialog-lightbox-close-button dialog-close-button" role="button" tabIndex={0}>
                              <i aria-hidden="true" className="eicon-close" />						<span className="elementor-screen-only">Close this search box.</span>
                            </div>
                          </div>
                        </form>
                      </search>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="elementor-section elementor-top-section elementor-element elementor-element-174e677 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section-items-middle" data-id="174e677" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;,&quot;sticky&quot;:&quot;top&quot;,&quot;sticky_on&quot;:[&quot;desktop&quot;,&quot;tablet&quot;,&quot;mobile&quot;],&quot;sticky_offset&quot;:0,&quot;sticky_effects_offset&quot;:0}">
            <div onMouseLeave={()=> mouseLeave()} className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-336d987" data-id="336d987" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-786384e elementor-section-content-middle elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="786384e" data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a0a480f" data-id="a0a480f" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-4e7074d elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-jet-mega-menu" data-id="4e7074d" data-element_type="widget" data-widget_type="jet-mega-menu.default">
                            <div className="elementor-widget-container">
                              <div className="menu-ccs-new-menu-test-container">
                                <div className="jet-menu-container">
                                  <div className="jet-menu-inner">
                                    <ul className="jet-menu jet-menu--animation-type-fade jet-menu--roll-up">
                                      <li id="jet-menu-item-42830" className="jet-menu-item jet-menu-item-type-post_type jet-menu-item-object-page jet-has-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-42830">
                                        <a href="https://callcenterstudio.com/why-call-center-studio/" className="top-level-link" data-wpel-link="internal">
                                          <div className="jet-menu-item-wrapper">
                                            <div className="jet-menu-title">Why CCS</div>
                                          </div>
                                        </a>
                                      </li>
                                      
                                      <li onMouseOver={(e)=> showSubNav(dropdown1)}  ref={dropdown1}   className="jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-has-roll-up jet-mega-menu-item jet-mega-menu-position-relative-item jet-regular-item jet-menu-item-has-children jet-menu-item-27031">
                                        <a className="top-level-link">
                                          <div className="jet-menu-item-wrapper">
                                            <div className="jet-menu-title">Product</div>
                                            <i className="jet-dropdown-arrow fa fa-angle-down" />
                                          </div>
                                        </a>
                                        <div onMouseLeave={()=> mouseLeave()}  className="jet-sub-mega-menu" data-template-id={27035}>
                                          <div data-elementor-type="wp-post" data-elementor-id={27035} className="elementor elementor-27035" data-elementor-post-type="jet-menu">
                                            <section className="elementor-section elementor-top-section elementor-element elementor-element-38b174d elementor-section-full_width elementor-hidden-desktop elementor-hidden-mobile elementor-section-height-default elementor-section-height-default" data-id="38b174d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                              <div className="elementor-container elementor-column-gap-default">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7d46673" data-id="7d46673" data-element_type="column">
                                                  <div className="elementor-widget-wrap elementor-element-populated">
                                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-eb0aebc elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="eb0aebc" data-element_type="section">
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-aebdf26" data-id="aebdf26" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-0bdcd29 elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="0bdcd29" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <link rel="stylesheet" href="https://callcenterstudio.com/wp-content/plugins/elementor/assets/css/widget-icon-box.min.css" />
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/contact-center-software/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                        </defs>
                                                                        <title>headset</title>
                                                                        <path d="M25,10h-.06A9,9,0,0,0,7.06,10H7A5,5,0,0,0,7,20H9V11a7,7,0,0,1,14,0V21a4,4,0,0,1-3.17,3.91,4,4,0,1,0,.05,2A6,6,0,0,0,25,21V20a5,5,0,0,0,0-10ZM4,15a3,3,0,0,1,3-3v6A3,3,0,0,1,4,15ZM16,28a2,2,0,1,1,2-2A2,2,0,0,1,16,28Zm9-10V12a3,3,0,0,1,0,6Z" transform="translate(0)" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/contact-center-software/" data-wpel-link="internal">
                                                                        Contact Center Software					</a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-28af0a8" data-id="28af0a8" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-ed1f68d elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="ed1f68d" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/employee-workforce-engagement-platform/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                        </defs>
                                                                        <title>share-knowledge</title>
                                                                        <path d="M27,25H21a3,3,0,0,0-3,3v2h2V28a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2h2V28A3,3,0,0,0,27,25Z" transform="translate(0 0)" />
                                                                        <path d="M20,20a4,4,0,1,0,4-4A4,4,0,0,0,20,20Zm6,0a2,2,0,1,1-2-2A2,2,0,0,1,26,20Z" transform="translate(0 0)" />
                                                                        <path d="M6,21V20H4v1a7,7,0,0,0,7,7h3V26H11A5,5,0,0,1,6,21Z" transform="translate(0 0)" />
                                                                        <rect x={19} y={10} width={7} height={2} />
                                                                        <rect x={19} y={6} width={10} height={2} />
                                                                        <rect x={19} y={2} width={10} height={2} />
                                                                        <path d="M11,11H5a3,3,0,0,0-3,3v2H4V14a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2h2V14A3,3,0,0,0,11,11Z" transform="translate(0 0)" />
                                                                        <path d="M8,10A4,4,0,1,0,4,6,4,4,0,0,0,8,10ZM8,4A2,2,0,1,1,6,6,2,2,0,0,1,8,4Z" transform="translate(0 0)" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/employee-workforce-engagement-platform/" data-wpel-link="internal">
                                                                        Workforce Engagement Platform					</a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-41f39fa" data-id="41f39fa" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-53a0b99 elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="53a0b99" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/automated-customer-support/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                        </defs>
                                                                        <title>chat-bot</title>
                                                                        <path d="M16,19a6.9908,6.9908,0,0,1-5.833-3.1287l1.666-1.1074a5.0007,5.0007,0,0,0,8.334,0l1.666,1.1074A6.9908,6.9908,0,0,1,16,19Z" />
                                                                        <path d="M20,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,20,8Z" />
                                                                        <path d="M12,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,12,8Z" />
                                                                        <path d="M17.7358,30,16,29l4-7h6a1.9966,1.9966,0,0,0,2-2V6a1.9966,1.9966,0,0,0-2-2H6A1.9966,1.9966,0,0,0,4,6V20a1.9966,1.9966,0,0,0,2,2h9v2H6a3.9993,3.9993,0,0,1-4-4V6A3.9988,3.9988,0,0,1,6,2H26a3.9988,3.9988,0,0,1,4,4V20a3.9993,3.9993,0,0,1-4,4H21.1646Z" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/automated-customer-support/" data-wpel-link="internal">
                                                                        Automation Customer Service					</a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-aea793d elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="aea793d" data-element_type="section">
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-a5b2d54" data-id="a5b2d54" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-b7534d7 elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="b7534d7" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/features-and-benefits/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                        </defs>
                                                                        <title>certificate</title>
                                                                        <polygon points="24 17 25.912 20.703 30 21.297 27 24 27.771 28 24 25.75 20.229 28 21 24 18 21.297 22.2 20.703 24 17" />
                                                                        <rect x={6} y={16} width={6} height={2} />
                                                                        <rect x={6} y={12} width={10} height={2} />
                                                                        <rect x={6} y={8} width={10} height={2} />
                                                                        <path d="M16,26H4V6H28V16h2V6a2,2,0,0,0-2-2H4A2,2,0,0,0,2,6V26a2,2,0,0,0,2,2H16Z" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/features-and-benefits/" data-wpel-link="internal">
                                                                        Features &amp; Benefits					</a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-e85a6df" data-id="e85a6df" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-1eb4bc8 elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="1eb4bc8" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/omni-channel-customer-service/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                        </defs>
                                                                        <rect x={26} y={2} width={4} height={4} />
                                                                        <rect x={26} y={8} width={4} height={4} />
                                                                        <rect x={20} y={2} width={4} height={4} />
                                                                        <rect x={20} y={8} width={4} height={4} />
                                                                        <path d="M25,30h-.17C5.18,28.87,2.39,12.29,2,7.23A3,3,0,0,1,4.7611,4.0088Q4.88,4,5,4h5.27a2,2,0,0,1,1.86,1.26L13.65,9a2,2,0,0,1-.44,2.16l-2.13,2.15a9.36,9.36,0,0,0,7.58,7.6l2.17-2.15A2,2,0,0,1,23,18.35l3.77,1.51A2,2,0,0,1,28,21.72V27A3,3,0,0,1,25,30ZM5,6a1,1,0,0,0-1.0032.9968c0,.0278.001.0555.0032.0832C4.46,13,7.41,27,24.94,28a1,1,0,0,0,1.0581-.9382Q26,27.0309,26,27V21.72l-3.77-1.51-2.87,2.85L18.88,23C10.18,21.91,9,13.21,9,13.12l-.06-.48,2.84-2.87L10.28,6Z" transform="translate(0 0)" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/omni-channel-customer-service/" data-wpel-link="internal">
                                                                        Omni-Channel Contact Center					</a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7422330" data-id={7422330} data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-7ddce22 elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="7ddce22" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/customer-experience-software/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                        </defs>
                                                                        <circle cx={23} cy="23.9999" r={2} />
                                                                        <path d="M30.7769,23.4785A8.64,8.64,0,0,0,23,18a8.64,8.64,0,0,0-7.7769,5.4785L15,24l.2231.5215A8.64,8.64,0,0,0,23,30a8.64,8.64,0,0,0,7.7769-5.4785L31,24ZM23,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,23,28Z" transform="translate(0 -0.0001)" />
                                                                        <path d="M12.3989,20.8A6,6,0,1,1,22,16H20a4,4,0,1,0-6.4,3.2Z" transform="translate(0 -0.0001)" />
                                                                        <path d="M29.3047,11.0439,26.9441,6.9561a1.9977,1.9977,0,0,0-2.3728-.8946l-2.4341.8233a11.0419,11.0419,0,0,0-1.312-.7583l-.5037-2.5186A2,2,0,0,0,18.36,2H13.64a2,2,0,0,0-1.9611,1.6079l-.5037,2.5186A10.9666,10.9666,0,0,0,9.8481,6.88L7.4287,6.0615a1.9977,1.9977,0,0,0-2.3728.8946L2.6953,11.0439a2.0006,2.0006,0,0,0,.4119,2.5025l1.9309,1.6968C5.021,15.4946,5,15.7446,5,16c0,.2578.01.5127.0278.7656l-1.9206,1.688a2.0006,2.0006,0,0,0-.4119,2.5025l2.3606,4.0878a1.9977,1.9977,0,0,0,2.3728.8946l2.4341-.8233a10.9736,10.9736,0,0,0,1.312.7583l.5037,2.5186A2,2,0,0,0,13.64,30H15V28H13.64l-.71-3.5508a9.0953,9.0953,0,0,1-2.6948-1.5713l-3.4468,1.166-2.36-4.0878L7.1528,17.561a8.9263,8.9263,0,0,1-.007-3.1279L4.4275,12.0439,6.7886,7.9561l3.4267,1.1591a9.0305,9.0305,0,0,1,2.7141-1.5644L13.64,4H18.36l.71,3.5508a9.0978,9.0978,0,0,1,2.6948,1.5713l3.4468-1.166,2.36,4.0878-2.7978,2.4522L26.0923,16l2.8-2.4536A2.0006,2.0006,0,0,0,29.3047,11.0439Z" transform="translate(0 -0.0001)" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/customer-experience-software/" data-wpel-link="internal">
                                                                        Customer Experience Analytics					</a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                  </div>
                                                </div>
                                              </div>
                                            </section>
                                            <section className="elementor-section elementor-top-section elementor-element elementor-element-f34a936 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="f34a936" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                              <div className="elementor-container elementor-column-gap-default">
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-6c97b20" data-id="6c97b20" data-element_type="column">
                                                  <div className="elementor-widget-wrap elementor-element-populated">
                                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-9c93ea0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9c93ea0" data-element_type="section">
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a34f02a" data-id="a34f02a" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-7b79688 elementor-widget elementor-widget-text-editor" data-id="7b79688" data-element_type="widget" data-widget_type="text-editor.default">
                                                              <div className="elementor-widget-container">
                                                                <style dangerouslySetInnerHTML={{__html: "/*! elementor - v3.18.0 - 08-12-2023 */\n                                                              .elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#69727d;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#69727d;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}\n                                                            " }} />
                                                                <span style={{color: '#808080'}}><a style={{color: '#f47a00'}} href="https://callcenterstudio.com/contact-center-software/" data-wpel-link="internal">CONTACT CENTER SOFTWARE</a></span>						
                                                              </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-b1461cd elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="b1461cd" data-element_type="widget" data-widget_type="icon-list.default">
                                                              <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/inbound/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <polygon points="21 25 16 30 11 25 12.409 23.581 15 26.153 15 19 17 19 17 26.206 19.591 23.581 21 25" />
                                                                          <polygon points="24 11 19 16 24 21 25.419 19.591 22.847 17 30 17 30 15 22.794 15 25.419 12.409 24 11" />
                                                                          <polygon points="8 11 13 16 8 21 6.581 19.591 9.153 17 2 17 2 15 9.206 15 6.581 12.409 8 11" />
                                                                          <path d="M12.4289,5.8227v1.63a1.1269,1.1269,0,0,1-.6767,1.026l-1.39.5967A1.1218,1.1218,0,0,1,9.14,8.8424L7.3208,7.0233a1.1165,1.1165,0,0,1,.0125-1.579l.0348-.0328c7.393-6.527,14.6913-2.0374,17.2127-.0473a1.1166,1.1166,0,0,1,.1746,1.5693,1.1011,1.1011,0,0,1-.0873.0971L22.9108,8.7878a1.1114,1.1114,0,0,1-1.2225.2329l-1.39-.5967a1.1112,1.1112,0,0,1-.68-1.0223v-1.63S15.9726,3.0648,12.4289,5.8227Z" transform="translate(0 0)" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Inbound Contact Center</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/outbound/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="icon" x="0px" y="0px" viewBox="0 0 32 32" style={{enableBackground: 'new 0 0 32 32'}} xmlSpace="preserve">
                                                                          <style type="text/css" dangerouslySetInnerHTML={{__html: "\t.st0{fill:#231F20;}\t.st1{fill:none;}" }} />
                                                                          <path d="M26,29h-0.2C6.2,27.9,3.4,11.3,3,6.2C2.9,4.6,4.1,3.1,5.8,3C5.8,3,5.9,3,6,3h5.3c0.8,0,1.6,0.5,1.9,1.3L14.6,8 c0.3,0.7,0.1,1.6-0.4,2.2l-2.1,2.1c0.7,3.9,3.7,6.9,7.6,7.6l2.2-2.1c0.6-0.6,1.4-0.7,2.2-0.4l3.8,1.5c0.7,0.3,1.2,1,1.2,1.9V26 C29,27.7,27.7,29,26,29z M6,5C5.4,5,5,5.4,5,6c0,0,0,0.1,0,0.1C5.5,12,8.4,26,25.9,27c0.6,0,1-0.4,1.1-0.9c0,0,0,0,0-0.1v-5.3 l-3.8-1.5l-2.9,2.9L19.9,22c-8.7-1.1-9.9-9.8-9.9-9.9l-0.1-0.5l2.8-2.9L11.3,5H6z" />
                                                                          <polygon className="st0" points="20,4 20,6 24.6,6 18,12.6 19.4,14 26,7.4 26,12 28,12 28,4 " />
                                                                          <rect id="_x3C_Transparent_Rectangle_x3E__250_" x={0} className="st1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Outbound Contact Center</span>
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-36eb0df elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="36eb0df" data-element_type="section">
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-1ff1c93" data-id="1ff1c93" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-43e43ed elementor-widget elementor-widget-text-editor" data-id="43e43ed" data-element_type="widget" data-widget_type="text-editor.default">
                                                              <div className="elementor-widget-container">
                                                                <span style={{color: '#808080'}}><a style={{color: '#f47a00'}} href="https://callcenterstudio.com/employee-workforce-engagement-platform/" data-wpel-link="internal">WORKFORCE ENGAGEMENT PLATFORM</a></span>						
                                                              </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-0f8cd4a elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="0f8cd4a" data-element_type="widget" data-widget_type="icon-list.default">
                                                              <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/performance-management/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>ordinal</title>
                                                                          <path d="M26,26V4H18v6H12v6H6V26H2v2H30V26ZM8,26V18h4v8Zm6,0V12h4V26Zm6,0V6h4V26Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Performance Management</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/quality-management-software/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <title>star--review</title>
                                                                          <rect x={18} y={26} width={8} height={2} />
                                                                          <rect x={18} y={22} width={12} height={2} />
                                                                          <rect x={18} y={18} width={12} height={2} />
                                                                          <polygon points="20.549 11.217 16 2 11.451 11.217 1.28 12.695 8.64 19.87 6.902 30 14 26.269 14 24.009 9.559 26.344 10.611 20.208 10.789 19.171 10.036 18.438 5.578 14.091 11.739 13.196 12.779 13.045 13.245 12.102 16 6.519 18.755 12.102 19.221 13.045 20.261 13.196 27.715 14.281 28 12.3 20.549 11.217" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Quality Management</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/agent-coaching/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <path d="M25,10H7a3.0033,3.0033,0,0,0-3,3v6a2.0023,2.0023,0,0,0,2,2v7a2.0023,2.0023,0,0,0,2,2h4a2.0023,2.0023,0,0,0,2-2V16H12V28H8V19H6V13a1.0009,1.0009,0,0,1,1-1H25a1.0009,1.0009,0,0,1,1,1v6H24v9H20V16H18V28a2.0023,2.0023,0,0,0,2,2h4a2.0023,2.0023,0,0,0,2-2V21a2.0023,2.0023,0,0,0,2-2V13A3.0033,3.0033,0,0,0,25,10Z" transform="translate(0 0)" />
                                                                          <path d="M10,9a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,10,9Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,10,3Z" transform="translate(0 0)" />
                                                                          <path d="M22,9a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,22,9Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,22,3Z" transform="translate(0 0)" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Agent Coaching</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/workforce-management-system/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <title>chart--3D</title>
                                                                          <path d="M28,23v3.5859l-5-5V15a1,1,0,0,0-.5527-.8945L17,11.3818V5.8281l2.5859,2.586L21,7,16,2,11,7l1.4141,1.4141L15,5.8281v5.5537L9.5527,14.1055A1,1,0,0,0,9,15v6.5859l-5,5V23H2v7H9V28H5.4141l4.7832-4.7832,5.3554,2.6777a1.001,1.001,0,0,0,.8946,0l5.3554-2.6777L26.5859,28H23v2h7V23Zm-13,.3818-4-2V16.6182l4,2Zm1-6.5L12.2363,15,16,13.1182,19.7637,15Zm5,4.5-4,2V18.6182l4-2Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Workforce Management</span>
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-6ae9644 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6ae9644" data-element_type="section">
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e1c39b0" data-id="e1c39b0" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-c2f6c29 elementor-widget elementor-widget-text-editor" data-id="c2f6c29" data-element_type="widget" data-widget_type="text-editor.default">
                                                              <div className="elementor-widget-container">
                                                                <span style={{color: '#808080'}}><a style={{color: '#f47a00'}} href="https://callcenterstudio.com/automated-customer-support/" data-wpel-link="internal">AUTOMATION CUSTOMER SERVICE</a></span>						
                                                              </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-973b3d6 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="973b3d6" data-element_type="widget" data-widget_type="icon-list.default">
                                                              <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/ai-chat/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <title>bot</title>
                                                                          <rect x={18} y={10} width={2} height={2} />
                                                                          <rect x={12} y={10} width={2} height={2} />
                                                                          <path d="M26,20H21V18h1a2.0023,2.0023,0,0,0,2-2V12h2V10H24V8a2.0023,2.0023,0,0,0-2-2H20V2H18V6H14V2H12V6H10A2.0023,2.0023,0,0,0,8,8v2H6v2H8v4a2.0023,2.0023,0,0,0,2,2h1v2H6a2.0023,2.0023,0,0,0-2,2v8H6V22H26v8h2V22A2.0023,2.0023,0,0,0,26,20ZM10,8H22v8H10Zm3,10h6v2H13Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">AI Chat</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/chatbot/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>chat-bot</title>
                                                                          <path d="M16,19a6.9908,6.9908,0,0,1-5.833-3.1287l1.666-1.1074a5.0007,5.0007,0,0,0,8.334,0l1.666,1.1074A6.9908,6.9908,0,0,1,16,19Z" />
                                                                          <path d="M20,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,20,8Z" />
                                                                          <path d="M12,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,12,8Z" />
                                                                          <path d="M17.7358,30,16,29l4-7h6a1.9966,1.9966,0,0,0,2-2V6a1.9966,1.9966,0,0,0-2-2H6A1.9966,1.9966,0,0,0,4,6V20a1.9966,1.9966,0,0,0,2,2h9v2H6a3.9993,3.9993,0,0,1-4-4V6A3.9988,3.9988,0,0,1,6,2H26a3.9988,3.9988,0,0,1,4,4V20a3.9993,3.9993,0,0,1-4,4H21.1646Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Chatbot</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/self-service-experience/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>watson-health--study--skip</title>
                                                                          <path d="M22,9h5.2A11,11,0,0,0,7,15H5A13,13,0,0,1,28,6.7V3h2v8H22Z" />
                                                                          <path d="M16,12a3,3,0,1,1-3,3,2.95,2.95,0,0,1,3-3m0-2a5,5,0,1,0,5,5A5,5,0,0,0,16,10Z" />
                                                                          <path d="M23,30H21V27a3,3,0,0,0-3-3H14a3,3,0,0,0-3,3v3H9V27a5,5,0,0,1,5-5h4a5,5,0,0,1,5,5Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Self Service Experience</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/ai-avatar/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32" id="icon">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>events</title>
                                                                          <path d="M26,14H24v2h2a3.0033,3.0033,0,0,1,3,3v4h2V19A5.0058,5.0058,0,0,0,26,14Z" transform="translate(0 0)" />
                                                                          <path d="M24,4a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-2a5,5,0,1,0,5,5A5,5,0,0,0,24,2Z" transform="translate(0 0)" />
                                                                          <path d="M23,30H21V28a3.0033,3.0033,0,0,0-3-3H14a3.0033,3.0033,0,0,0-3,3v2H9V28a5.0059,5.0059,0,0,1,5-5h4a5.0059,5.0059,0,0,1,5,5Z" transform="translate(0 0)" />
                                                                          <path d="M16,13a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-2a5,5,0,1,0,5,5A5,5,0,0,0,16,11Z" transform="translate(0 0)" />
                                                                          <path d="M8,14H6a5.0059,5.0059,0,0,0-5,5v4H3V19a3.0033,3.0033,0,0,1,3-3H8Z" transform="translate(0 0)" />
                                                                          <path d="M8,4A3,3,0,1,1,5,7,3,3,0,0,1,8,4M8,2a5,5,0,1,0,5,5A5,5,0,0,0,8,2Z" transform="translate(0 0)" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">AI Avatar</span>
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                  </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-9e10f19" data-id="9e10f19" data-element_type="column">
                                                  <div className="elementor-widget-wrap elementor-element-populated">
                                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-54e03d2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="54e03d2" data-element_type="section">
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-196ff8a" data-id="196ff8a" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-38d674e elementor-widget elementor-widget-text-editor" data-id="38d674e" data-element_type="widget" data-widget_type="text-editor.default">
                                                              <div className="elementor-widget-container">
                                                                <span style={{color: '#808080'}}><a style={{color: '#f47a00'}} href="https://callcenterstudio.com/features-and-benefits/" data-wpel-link="internal">FEATURES &amp; BENEFITS</a></span>						
                                                              </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-4f1f86d elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="4f1f86d" data-element_type="widget" data-widget_type="icon-list.default">
                                                              <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/acd/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <rect x={26} y={2} width={4} height={4} />
                                                                          <rect x={26} y={8} width={4} height={4} />
                                                                          <rect x={20} y={2} width={4} height={4} />
                                                                          <rect x={20} y={8} width={4} height={4} />
                                                                          <path d="M25,30h-.17C5.18,28.87,2.39,12.29,2,7.23A3,3,0,0,1,4.7611,4.0088Q4.88,4,5,4h5.27a2,2,0,0,1,1.86,1.26L13.65,9a2,2,0,0,1-.44,2.16l-2.13,2.15a9.36,9.36,0,0,0,7.58,7.6l2.17-2.15A2,2,0,0,1,23,18.35l3.77,1.51A2,2,0,0,1,28,21.72V27A3,3,0,0,1,25,30ZM5,6a1,1,0,0,0-1.0032.9968c0,.0278.001.0555.0032.0832C4.46,13,7.41,27,24.94,28a1,1,0,0,0,1.0581-.9382Q26,27.0309,26,27V21.72l-3.77-1.51-2.87,2.85L18.88,23C10.18,21.91,9,13.21,9,13.12l-.06-.48,2.84-2.87L10.28,6Z" transform="translate(0 0)" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">ACD</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/ivr/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>data--unstructured</title>
                                                                          <path d="M6,24a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4A4,4,0,0,0,6,22Z" />
                                                                          <path d="M16,4a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4A4,4,0,0,0,16,2Z" />
                                                                          <path d="M26,4a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4A4,4,0,0,0,26,2Z" />
                                                                          <path d="M18,24v4H14V24h4m2-2H12v8h8Z" />
                                                                          <path d="M27,22.14V17a2,2,0,0,0-2-2H7V10h3V2H2v8H5v5a2,2,0,0,0,2,2H25v5.14a4,4,0,1,0,2,0ZM4,4H8V8H4ZM26,28a2,2,0,1,1,2-2A2,2,0,0,1,26,28Z" />
                                                                          <g id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>">
                                                                            <rect className="cls-1" width={32} height={32} />
                                                                          </g>
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">IVR</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/cti/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <circle cx={23} cy="23.9999" r={2} />
                                                                          <path d="M30.7769,23.4785A8.64,8.64,0,0,0,23,18a8.64,8.64,0,0,0-7.7769,5.4785L15,24l.2231.5215A8.64,8.64,0,0,0,23,30a8.64,8.64,0,0,0,7.7769-5.4785L31,24ZM23,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,23,28Z" transform="translate(0 -0.0001)" />
                                                                          <path d="M12.3989,20.8A6,6,0,1,1,22,16H20a4,4,0,1,0-6.4,3.2Z" transform="translate(0 -0.0001)" />
                                                                          <path d="M29.3047,11.0439,26.9441,6.9561a1.9977,1.9977,0,0,0-2.3728-.8946l-2.4341.8233a11.0419,11.0419,0,0,0-1.312-.7583l-.5037-2.5186A2,2,0,0,0,18.36,2H13.64a2,2,0,0,0-1.9611,1.6079l-.5037,2.5186A10.9666,10.9666,0,0,0,9.8481,6.88L7.4287,6.0615a1.9977,1.9977,0,0,0-2.3728.8946L2.6953,11.0439a2.0006,2.0006,0,0,0,.4119,2.5025l1.9309,1.6968C5.021,15.4946,5,15.7446,5,16c0,.2578.01.5127.0278.7656l-1.9206,1.688a2.0006,2.0006,0,0,0-.4119,2.5025l2.3606,4.0878a1.9977,1.9977,0,0,0,2.3728.8946l2.4341-.8233a10.9736,10.9736,0,0,0,1.312.7583l.5037,2.5186A2,2,0,0,0,13.64,30H15V28H13.64l-.71-3.5508a9.0953,9.0953,0,0,1-2.6948-1.5713l-3.4468,1.166-2.36-4.0878L7.1528,17.561a8.9263,8.9263,0,0,1-.007-3.1279L4.4275,12.0439,6.7886,7.9561l3.4267,1.1591a9.0305,9.0305,0,0,1,2.7141-1.5644L13.64,4H18.36l.71,3.5508a9.0978,9.0978,0,0,1,2.6948,1.5713l3.4468-1.166,2.36,4.0878-2.7978,2.4522L26.0923,16l2.8-2.4536A2.0006,2.0006,0,0,0,29.3047,11.0439Z" transform="translate(0 -0.0001)" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">CTI</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/auto-dialer-software-for-businesses/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <path d="M25.334,11.95l1.2055-1.206a1.178,1.178,0,0,1,1.2593-.2584l1.4693.5868A1.1736,1.1736,0,0,1,30,12.1489v2.692A1.1681,1.1681,0,0,1,28.8229,16l-.05-.0015C18.4775,15.3578,16.4,6.6357,16.0073,3.2976a1.1681,1.1681,0,0,1,1.0315-1.29A1.1492,1.1492,0,0,1,17.1751,2h2.5994a1.1626,1.1626,0,0,1,1.0764.7322l.5866,1.47a1.1635,1.1635,0,0,1-.2529,1.26L19.9791,6.668S20.6733,11.3682,25.334,11.95Z" transform="translate(0 0)" />
                                                                          <path d="M16,30H14V25a3.0033,3.0033,0,0,0-3-3H7a3.0033,3.0033,0,0,0-3,3v5H2V25a5.0059,5.0059,0,0,1,5-5h4a5.0059,5.0059,0,0,1,5,5Z" transform="translate(0 0)" />
                                                                          <path d="M9,10a3,3,0,1,1-3,3,3,3,0,0,1,3-3M9,8a5,5,0,1,0,5,5A5,5,0,0,0,9,8Z" transform="translate(0 0)" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Auto Dialer</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/predictive-dialer/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>list--checked</title>
                                                                          <rect x={16} y={8} width={14} height={2} />
                                                                          <rect x={16} y={22} width={14} height={2} />
                                                                          <path d="M10,14H4a2.0023,2.0023,0,0,1-2-2V6A2.0023,2.0023,0,0,1,4,4h6a2.0023,2.0023,0,0,1,2,2v6A2.0023,2.0023,0,0,1,10,14ZM4,6v6h6.0012L10,6Z" />
                                                                          <path d="M10,28H4a2.0023,2.0023,0,0,1-2-2V20a2.0023,2.0023,0,0,1,2-2h6a2.0023,2.0023,0,0,1,2,2v6A2.0023,2.0023,0,0,1,10,28ZM4,20v6h6.0012L10,20Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Predictive Dialer</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/call-recording/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>microphone</title>
                                                                          <path d="M23,14v3A7,7,0,0,1,9,17V14H7v3a9,9,0,0,0,8,8.94V28H11v2H21V28H17V25.94A9,9,0,0,0,25,17V14Z" />
                                                                          <path d="M16,22a5,5,0,0,0,5-5V7A5,5,0,0,0,11,7V17A5,5,0,0,0,16,22ZM13,7a3,3,0,0,1,6,0V17a3,3,0,0,1-6,0Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Call Recording</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/number-masking/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>rule</title>
                                                                          <rect x={10} y={16} width={12} height={2} />
                                                                          <rect x={10} y={10} width={12} height={2} />
                                                                          <path d="M16,30,9.8242,26.7071A10.9815,10.9815,0,0,1,4,17V4A2.0022,2.0022,0,0,1,6,2H26a2.0022,2.0022,0,0,1,2,2V17a10.9815,10.9815,0,0,1-5.8242,9.7069ZM6,4V17a8.9852,8.9852,0,0,0,4.7656,7.9423L16,27.7333l5.2344-2.791A8.9852,8.9852,0,0,0,26,17V4Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Number Masking</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/business-phone-number/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <rect x={26} y={2} width={4} height={4} />
                                                                          <rect x={26} y={8} width={4} height={4} />
                                                                          <rect x={20} y={2} width={4} height={4} />
                                                                          <rect x={20} y={8} width={4} height={4} />
                                                                          <path d="M25,30h-.17C5.18,28.87,2.39,12.29,2,7.23A3,3,0,0,1,4.7611,4.0088Q4.88,4,5,4h5.27a2,2,0,0,1,1.86,1.26L13.65,9a2,2,0,0,1-.44,2.16l-2.13,2.15a9.36,9.36,0,0,0,7.58,7.6l2.17-2.15A2,2,0,0,1,23,18.35l3.77,1.51A2,2,0,0,1,28,21.72V27A3,3,0,0,1,25,30ZM5,6a1,1,0,0,0-1.0032.9968c0,.0278.001.0555.0032.0832C4.46,13,7.41,27,24.94,28a1,1,0,0,0,1.0581-.9382Q26,27.0309,26,27V21.72l-3.77-1.51-2.87,2.85L18.88,23C10.18,21.91,9,13.21,9,13.12l-.06-.48,2.84-2.87L10.28,6Z" transform="translate(0 0)" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Business Phone Number ​</span>
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-76395f4 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="76395f4" data-element_type="section">
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-15adada" data-id="15adada" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-a7513f8 elementor-widget elementor-widget-text-editor" data-id="a7513f8" data-element_type="widget" data-widget_type="text-editor.default">
                                                              <div className="elementor-widget-container">
                                                                <span style={{color: '#808080'}}><a style={{color: '#f47a00'}} href="https://callcenterstudio.com/customer-experience-software/" data-wpel-link="internal">CUSTOMER EXPERIENCE ANALYTICS</a></span>						
                                                              </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-4728efe elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="4728efe" data-element_type="widget" data-widget_type="icon-list.default">
                                                              <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/satisfaction-surveys/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>chat-bot</title>
                                                                          <path d="M16,19a6.9908,6.9908,0,0,1-5.833-3.1287l1.666-1.1074a5.0007,5.0007,0,0,0,8.334,0l1.666,1.1074A6.9908,6.9908,0,0,1,16,19Z" />
                                                                          <path d="M20,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,20,8Z" />
                                                                          <path d="M12,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,12,8Z" />
                                                                          <path d="M17.7358,30,16,29l4-7h6a1.9966,1.9966,0,0,0,2-2V6a1.9966,1.9966,0,0,0-2-2H6A1.9966,1.9966,0,0,0,4,6V20a1.9966,1.9966,0,0,0,2,2h9v2H6a3.9993,3.9993,0,0,1-4-4V6A3.9988,3.9988,0,0,1,6,2H26a3.9988,3.9988,0,0,1,4,4V20a3.9993,3.9993,0,0,1-4,4H21.1646Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Customer Satisfaction Surveys</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/monitoring-reporting/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>ordinal</title>
                                                                          <path d="M26,26V4H18v6H12v6H6V26H2v2H30V26ZM8,26V18h4v8Zm6,0V12h4V26Zm6,0V6h4V26Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Reporting / Monitoring</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/cx-insights/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <title>star--review</title>
                                                                          <rect x={18} y={26} width={8} height={2} />
                                                                          <rect x={18} y={22} width={12} height={2} />
                                                                          <rect x={18} y={18} width={12} height={2} />
                                                                          <polygon points="20.549 11.217 16 2 11.451 11.217 1.28 12.695 8.64 19.87 6.902 30 14 26.269 14 24.009 9.559 26.344 10.611 20.208 10.789 19.171 10.036 18.438 5.578 14.091 11.739 13.196 12.779 13.045 13.245 12.102 16 6.519 18.755 12.102 19.221 13.045 20.261 13.196 27.715 14.281 28 12.3 20.549 11.217" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">CX Insights</span>
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                  </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-812ea8c" data-id="812ea8c" data-element_type="column">
                                                  <div className="elementor-widget-wrap elementor-element-populated">
                                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-cfdb66e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="cfdb66e" data-element_type="section">
                                                      <div className="elementor-container elementor-column-gap-no">
                                                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-d144e93" data-id="d144e93" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-56ffda9 elementor-widget elementor-widget-text-editor" data-id="56ffda9" data-element_type="widget" data-widget_type="text-editor.default">
                                                              <div className="elementor-widget-container">
                                                                <span style={{color: '#f47a00'}}><a style={{color: '#f47a00'}} href="https://callcenterstudio.com/omni-channel-customer-service/" data-wpel-link="internal">OMNI-CHANNEL CONTACT CENTER</a></span>						
                                                              </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-c954be9 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="c954be9" data-element_type="widget" data-widget_type="icon-list.default">
                                                              <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/messaging-for-business/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="icon" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" style={{enableBackground: 'new 0 0 32 32'}} xmlSpace="preserve">
                                                                          <style type="text/css" dangerouslySetInnerHTML={{__html: "\t.st0{fill:none;}" }} />
                                                                          <path d="M28,2H18c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h2.4l1.7,3l1.7-1l-2.3-4H18V4h10v6h-3v2h3c1.1,0,2-0.9,2-2V4 C30,2.9,29.1,2,28,2z" />
                                                                          <path d="M14.7,31L13,30l3.5-6H22c1.1,0,2-0.9,2-2v-5h2v5c0,2.2-1.8,4-4,4h-4.4L14.7,31z" />
                                                                          <circle cx={10} cy={17} r={1} />
                                                                          <circle cx={14} cy={17} r={1} />
                                                                          <circle cx={18} cy={17} r={1} />
                                                                          <path d="M12,26H6c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h8v2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h6V26z" />
                                                                          <rect id="_x3C_Transparent_Rectangle_x3E__232_" y={0} className="st0" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Messaging</span>
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-4c0e0a6 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="4c0e0a6" data-element_type="widget" data-widget_type="icon-list.default">
                                                              <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/chat/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" height={512} viewBox="0 0 512.176 512.176" width={512}>
                                                                          <g>
                                                                            <path d="m490.597 229.926c-.824-39.916-11.863-79.036-31.984-113.401 16.372-78.318-66.438-142.004-137.757-106.391-67.231-20.045-145.397-9.386-207.055 38.348-7.822 5.998 1.629 17.651 9.127 11.904 18.936-14.519 39.914-25.775 62.351-33.458 23.393-8.01 47.891-11.955 72.832-11.743 15.593.136 31.089 1.922 46.192 5.314-5.892 4.573-11.244 9.809-15.944 15.595-116.67-19.932-227.73 70.287-233.053 187.509-6.151-.299-12.49.129-18.437 1.751 2.071-49.716 21.024-97.898 52.746-133.438 6.458-7.234-4.733-17.222-11.19-9.988-35.645 39.934-56.25 94.664-56.737 150.499-13.04 9.013-21.6 24.065-21.6 41.08v72.473c0 32.031 27.274 50.647 56.824 49.903 10.456 30.212 54.534 23.649 55.284-8.769v-157.316c.335-20.033-21.455-34.271-39.621-25.992 15.261-95.771 107.626-166.822 206.404-153.895-21.202 36.197-14.085 87.041 16.619 116.218v20.365c1.001 6.031 4.474 8.334 10.419 6.909l18.256-7.713c34.436 16.133 79.301 7.894 105.602-17.894 4.526 11.694 7.832 23.754 9.896 36.084-18.182-8.411-40.125 5.782-39.789 25.917v157.316c-.216 21.332 23.582 35.305 42.039 24.797-.038 6.627-.159 13.252-.419 19.812-1.786 21.488-18.354 39.53-39.484 43.014-6.714.66-14.371.916-23.735.782-3.357-12.323-14.646-21.409-28.018-21.409h-39.825c-38.507 1.59-38.516 56.474 0 58.067h39.823c13.461 0 24.811-9.208 28.084-21.656 8.463.114 17.423.411 25.826-.938 28.025-4.484 50.411-28.375 52.685-56.808.008-.1-.004-.199 0-.298.522-13.051.128-26.232 0-39.168 28.989 1.405 55.13-19.722 55.13-49.903v-72.473c0-16.968-8.512-31.985-21.491-41.006zm-475.509 116.054v-72.473c0-21.864 19.243-36.09 39.907-34.903v142.279c-20.675 1.146-39.907-12.972-39.907-34.903zm68.772-129.518c7.354 0 13.336 5.983 13.336 13.336v157.316c-.735 17.697-25.944 17.682-26.672 0v-157.316c0-7.354 5.983-13.336 13.336-13.336zm266.503 280.714h-39.823c-7.738 0-14.034-6.295-14.034-14.034s6.295-14.034 14.034-14.034h39.823c18.607.767 18.622 27.296 0 28.068zm124.956-274.393c-5.953-1.626-12.299-2.053-18.456-1.754-1.537-22.706-6.857-44.738-15.849-65.616 4.451-5.89 8.246-12.301 11.275-19.125 13.516 26.871 21.38 56.357 23.03 86.495zm-111.686-43.764c-12.595 0-24.679-2.784-35.917-8.273-2.058-.955-4.128-1.011-6.211-.17l-10.907 4.608v-12.267c0-2.098-.878-4.1-2.422-5.52-54.61-50.116-18.744-142.261 55.458-142.22 108.696 4.497 108.671 159.357-.001 163.842zm133.455 164.386c0 22.101-19.513 36.16-40.304 34.903-.094-8.06-.147-16.12-.132-24.18 0-9.697-15-9.697-15 0v32.985c0 7.354-5.983 13.336-13.336 13.336s-13.336-5.982-13.336-13.336v-157.315c.712-17.649 25.924-17.73 26.672 0v84.404c0 9.697 15 9.697 15 0v-78.173c20.842-1.18 40.436 12.611 40.436 34.903z" />
                                                                            <path d="m324.32 422.505c5.945 1.425 9.418-.877 10.419-6.909v-24.488c71.851-69.86 21.718-193.315-78.652-193.186-62.098-.001-112.62 50.513-112.62 112.601-.952 80.556 85.913 136.642 158.867 102.694zm-25.439-24.237c-63.421 31.937-141.285-16.659-140.413-87.746-.001-53.817 43.792-97.601 97.62-97.601 88.413-.04 131.135 109.743 66.073 169.443-1.544 1.42-2.422 3.422-2.422 5.52v16.402l-14.647-6.188c-1.997-.844-4.263-.782-6.211.17z" />
                                                                            <path d="m236.028 275.956h40.121c9.697 0 9.697-15 0-15h-40.121c-9.698 0-9.698 15 0 15z" />
                                                                            <path d="m276.149 345.09h-40.121c-9.697 0-9.697 15 0 15h40.121c9.697 0 9.697-15 0-15z" />
                                                                            <path d="m297.613 303.023h-83.05c-9.697 0-9.697 15 0 15h83.05c9.697 0 9.697-15 0-15z" />
                                                                            <path d="m364.29 39.861c-17.716-.339-32.693 14.31-32.693 32.029 0 9.697 15 9.697 15 0 0-9.233 8.128-17.234 17.391-17.032 8.88.179 16.197 7.258 16.657 16.116.5 9.63-7.356 17.952-17.012 17.952-4.142 0-7.5 3.358-7.5 7.5v25.656c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-19.056c14.815-3.593 25.282-17.596 24.491-32.83-.865-16.673-14.629-29.998-31.334-30.335z" />
                                                                            <path d="m363.633 140.331c-9.652 0-9.668 15 0 15 9.651 0 9.667-15 0-15z" />
                                                                          </g>
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Live Chat</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/whatsapp/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <i aria-hidden="true" className="fab fa-whatsapp" />						</span>
                                                                      <span className="elementor-icon-list-text">Whatsapp</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/facebook-messenger/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <i aria-hidden="true" className="fab fa-facebook-messenger" />						</span>
                                                                      <span className="elementor-icon-list-text">Messenger</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/telegram-for-business/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <i aria-hidden="true" className="fab fa-telegram-plane" />						</span>
                                                                      <span className="elementor-icon-list-text">Telegram</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/google-business-messenger/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <i aria-hidden="true" className="fab fa-google" />						</span>
                                                                      <span className="elementor-icon-list-text">Google Business Messenger</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/conversations-api/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <i aria-hidden="true" className="fas fa-laptop-code" />						</span>
                                                                      <span className="elementor-icon-list-text">Conversations API</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/sms" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <i aria-hidden="true" className="fas fa-sms" />						</span>
                                                                      <span className="elementor-icon-list-text">SMS</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/e-mail/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <i aria-hidden="true" className="far fa-envelope" />						</span>
                                                                      <span className="elementor-icon-list-text">E-Mail</span>
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-9d6229d elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="9d6229d" data-element_type="widget" data-widget_type="icon-list.default">
                                                              <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/ticket-system-software/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>ticket</title>
                                                                          <path d="M29,14a1,1,0,0,0,1-1V8a2,2,0,0,0-2-2H4A2,2,0,0,0,2,8v5a1,1,0,0,0,1,1,2,2,0,0,1,0,4,1,1,0,0,0-1,1v5a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V19a1,1,0,0,0-1-1,2,2,0,0,1,0-4Zm-1,5.87V24H21V21H19v3H4V19.87a4,4,0,0,0,0-7.74V8H19v3h2V8h7v4.13a4,4,0,0,0,0,7.74Z" transform="translate(0 0)" />
                                                                          <rect x={19} y={13} width={2} height={6} />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Ticketing System</span>
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                  </div>
                                                </div>
                                              </div>
                                            </section>
                                          </div>
                                        </div>
                                      </li>
                                      
                                      <li onMouseOver={(e)=> showSubNav(dropdown2)} ref={dropdown2} id="jet-menu-item-47206" className="jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-has-roll-up jet-mega-menu-item jet-mega-menu-position-relative-item jet-regular-item jet-menu-item-has-children jet-menu-item-47206 ">
                                        <a href="#" className="top-level-link">
                                          <div className="jet-menu-item-wrapper">
                                            <div className="jet-menu-title">AI Products</div>
                                            <i className="jet-dropdown-arrow fa fa-angle-down" />
                                          </div>
                                        </a>
                                        <div className="jet-sub-mega-menu" data-template-id={47208}>
                                          <div data-elementor-type="wp-post" data-elementor-id={47208} className="elementor elementor-47208" data-elementor-post-type="jet-menu">
                                            <section className="elementor-section elementor-top-section elementor-element elementor-element-f216f7c elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="f216f7c" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                              <div className="elementor-container elementor-column-gap-default">
                                                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-03ba4b0" data-id="03ba4b0" data-element_type="column">
                                                  <div className="elementor-widget-wrap elementor-element-populated">
                                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-ce0e327 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="ce0e327" data-element_type="section">
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-194b0fa" data-id="194b0fa" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-74344d4 elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="74344d4" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/ai-chat/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                        </defs>
                                                                        <title>bot</title>
                                                                        <rect x={18} y={10} width={2} height={2} />
                                                                        <rect x={12} y={10} width={2} height={2} />
                                                                        <path d="M26,20H21V18h1a2.0023,2.0023,0,0,0,2-2V12h2V10H24V8a2.0023,2.0023,0,0,0-2-2H20V2H18V6H14V2H12V6H10A2.0023,2.0023,0,0,0,8,8v2H6v2H8v4a2.0023,2.0023,0,0,0,2,2h1v2H6a2.0023,2.0023,0,0,0-2,2v8H6V22H26v8h2V22A2.0023,2.0023,0,0,0,26,20ZM10,8H22v8H10Zm3,10h6v2H13Z" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/ai-chat/" data-wpel-link="internal">
                                                                        AI Chat					</a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-acf1258" data-id="acf1258" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-33cc09d elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="33cc09d" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/chatbot/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                        </defs>
                                                                        <title>chat-bot</title>
                                                                        <path d="M16,19a6.9908,6.9908,0,0,1-5.833-3.1287l1.666-1.1074a5.0007,5.0007,0,0,0,8.334,0l1.666,1.1074A6.9908,6.9908,0,0,1,16,19Z" />
                                                                        <path d="M20,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,20,8Z" />
                                                                        <path d="M12,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,12,8Z" />
                                                                        <path d="M17.7358,30,16,29l4-7h6a1.9966,1.9966,0,0,0,2-2V6a1.9966,1.9966,0,0,0-2-2H6A1.9966,1.9966,0,0,0,4,6V20a1.9966,1.9966,0,0,0,2,2h9v2H6a3.9993,3.9993,0,0,1-4-4V6A3.9988,3.9988,0,0,1,6,2H26a3.9988,3.9988,0,0,1,4,4V20a3.9993,3.9993,0,0,1-4,4H21.1646Z" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/chatbot/" data-wpel-link="internal">
                                                                        Chatbot					</a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-4203cfb" data-id="4203cfb" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-364e008 elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="364e008" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/accent-neutralization/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                        </defs>
                                                                        <path d="M26,30H24V27H20a5.0055,5.0055,0,0,1-5-5V20.7207l-2.3162-.772a1,1,0,0,1-.5412-1.4631L15,13.7229V11a9.01,9.01,0,0,1,9-9h5V4H24a7.0078,7.0078,0,0,0-7,7v3a.9991.9991,0,0,1-.1426.5144l-2.3586,3.9312,1.8174.6057A1,1,0,0,1,17,20v2a3.0033,3.0033,0,0,0,3,3h5a1,1,0,0,1,1,1Z" />
                                                                        <rect x={19} y={12} width={4} height={2} />
                                                                        <path d="M9.3325,25.2168a7.0007,7.0007,0,0,1,0-10.4341l1.334,1.49a5,5,0,0,0,0,7.4537Z" />
                                                                        <path d="M6.3994,28.8008a11.0019,11.0019,0,0,1,0-17.6006L7.6,12.8a9.0009,9.0009,0,0,0,0,14.4014Z" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/accent-neutralization/" data-wpel-link="internal">
                                                                        Accent Neutralization					</a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-f307211" data-id="f307211" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-95406fc elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="95406fc" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/ai-avatar/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32" id="icon">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                        </defs>
                                                                        <title>events</title>
                                                                        <path d="M26,14H24v2h2a3.0033,3.0033,0,0,1,3,3v4h2V19A5.0058,5.0058,0,0,0,26,14Z" transform="translate(0 0)" />
                                                                        <path d="M24,4a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-2a5,5,0,1,0,5,5A5,5,0,0,0,24,2Z" transform="translate(0 0)" />
                                                                        <path d="M23,30H21V28a3.0033,3.0033,0,0,0-3-3H14a3.0033,3.0033,0,0,0-3,3v2H9V28a5.0059,5.0059,0,0,1,5-5h4a5.0059,5.0059,0,0,1,5,5Z" transform="translate(0 0)" />
                                                                        <path d="M16,13a3,3,0,1,1-3,3,3,3,0,0,1,3-3m0-2a5,5,0,1,0,5,5A5,5,0,0,0,16,11Z" transform="translate(0 0)" />
                                                                        <path d="M8,14H6a5.0059,5.0059,0,0,0-5,5v4H3V19a3.0033,3.0033,0,0,1,3-3H8Z" transform="translate(0 0)" />
                                                                        <path d="M8,4A3,3,0,1,1,5,7,3,3,0,0,1,8,4M8,2a5,5,0,1,0,5,5A5,5,0,0,0,8,2Z" transform="translate(0 0)" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/ai-avatar/" data-wpel-link="internal">
                                                                        AI Avatar					</a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-439a670" data-id="439a670" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-de9cd4b elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="de9cd4b" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/cx-insights/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                        </defs>
                                                                        <title>star--review</title>
                                                                        <rect x={18} y={26} width={8} height={2} />
                                                                        <rect x={18} y={22} width={12} height={2} />
                                                                        <rect x={18} y={18} width={12} height={2} />
                                                                        <polygon points="20.549 11.217 16 2 11.451 11.217 1.28 12.695 8.64 19.87 6.902 30 14 26.269 14 24.009 9.559 26.344 10.611 20.208 10.789 19.171 10.036 18.438 5.578 14.091 11.739 13.196 12.779 13.045 13.245 12.102 16 6.519 18.755 12.102 19.221 13.045 20.261 13.196 27.715 14.281 28 12.3 20.549 11.217" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/cx-insights/" data-wpel-link="internal">
                                                                        CX Insights					</a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-83b46bb" data-id="83b46bb" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-f7087d5 elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="f7087d5" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/agent-assist/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                        </defs>
                                                                        <title>share-knowledge</title>
                                                                        <path d="M27,25H21a3,3,0,0,0-3,3v2h2V28a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2h2V28A3,3,0,0,0,27,25Z" transform="translate(0 0)" />
                                                                        <path d="M20,20a4,4,0,1,0,4-4A4,4,0,0,0,20,20Zm6,0a2,2,0,1,1-2-2A2,2,0,0,1,26,20Z" transform="translate(0 0)" />
                                                                        <path d="M6,21V20H4v1a7,7,0,0,0,7,7h3V26H11A5,5,0,0,1,6,21Z" transform="translate(0 0)" />
                                                                        <rect x={19} y={10} width={7} height={2} />
                                                                        <rect x={19} y={6} width={10} height={2} />
                                                                        <rect x={19} y={2} width={10} height={2} />
                                                                        <path d="M11,11H5a3,3,0,0,0-3,3v2H4V14a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2h2V14A3,3,0,0,0,11,11Z" transform="translate(0 0)" />
                                                                        <path d="M8,10A4,4,0,1,0,4,6,4,4,0,0,0,8,10ZM8,4A2,2,0,1,1,6,6,2,2,0,0,1,8,4Z" transform="translate(0 0)" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <h3 className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/agent-assist/" data-wpel-link="internal">
                                                                        Agent Asist					</a>
                                                                    </h3>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                  </div>
                                                </div>
                                              </div>
                                            </section>
                                          </div>
                                        </div>
                                      </li>
                                      <li onMouseOver={(e)=> showSubNav(dropdown3)} ref={dropdown3} id="jet-menu-item-27032" className="jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-has-roll-up jet-mega-menu-item jet-regular-item jet-menu-item-has-children jet-menu-item-27032 ">
                                        <a className="top-level-link">
                                          <div className="jet-menu-item-wrapper">
                                            <div className="jet-menu-title">Solutions</div>
                                            <i className="jet-dropdown-arrow fa fa-angle-down" />
                                          </div>
                                        </a>
                                        <div className="jet-sub-mega-menu" data-template-id={33166}>
                                          <div data-elementor-type="wp-post" data-elementor-id={33166} className="elementor elementor-33166" data-elementor-post-type="jet-menu">
                                            <section className="elementor-section elementor-top-section elementor-element elementor-element-8758d16 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="8758d16" data-element_type="section">
                                              <div className="elementor-container elementor-column-gap-default">
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-0dc97f6" data-id="0dc97f6" data-element_type="column">
                                                  <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-60e833d elementor-widget elementor-widget-text-editor" data-id="60e833d" data-element_type="widget" data-widget_type="text-editor.default">
                                                      <div className="elementor-widget-container">
                                                        <span style={{color: '#f47a00'}}><a style={{color: '#f47a00'}} href="https://callcenterstudio.com/solutions/" data-wpel-link="internal">BY INDUSTRY</a></span>						
                                                      </div>
                                                    </div>
                                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-240fc1e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="240fc1e" data-element_type="section">
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-71ee046" data-id="71ee046" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-3f445ad elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="3f445ad" data-element_type="widget" data-widget_type="icon-list.default">
                                                              <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/solutions/health/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <title>stethoscope</title>
                                                                          <path d="M24,2V4h2v6a4,4,0,0,1-8,0V4h2V2H16v8a6.0051,6.0051,0,0,0,5,5.91V22A6,6,0,0,1,9,22V15.8579a4,4,0,1,0-2,0V22a8,8,0,0,0,16,0V15.91A6.0051,6.0051,0,0,0,28,10V2ZM6,12a2,2,0,1,1,2,2A2.0023,2.0023,0,0,1,6,12Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Healthcare</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/solutions/ecommerce/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>shopping--cart</title>
                                                                          <circle cx={10} cy={28} r={2} />
                                                                          <circle cx={24} cy={28} r={2} />
                                                                          <path d="M28,7H5.82L5,2.8A1,1,0,0,0,4,2H0V4H3.18L7,23.2A1,1,0,0,0,8,24H26V22H8.82L8,18H26a1,1,0,0,0,1-.78l2-9A1,1,0,0,0,28,7Zm-2.8,9H7.62L6.22,9H26.75Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">eCommerce</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/solutions/insurance/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>rule</title>
                                                                          <rect x={10} y={16} width={12} height={2} />
                                                                          <rect x={10} y={10} width={12} height={2} />
                                                                          <path d="M16,30,9.8242,26.7071A10.9815,10.9815,0,0,1,4,17V4A2.0022,2.0022,0,0,1,6,2H26a2.0022,2.0022,0,0,1,2,2V17a10.9815,10.9815,0,0,1-5.8242,9.7069ZM6,4V17a8.9852,8.9852,0,0,0,4.7656,7.9423L16,27.7333l5.2344-2.791A8.9852,8.9852,0,0,0,26,17V4Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Insurance</span>
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-440a2e1" data-id="440a2e1" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-c0a1737 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="c0a1737" data-element_type="widget" data-widget_type="icon-list.default">
                                                              <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/solutions/logistics/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>delivery-truck</title>
                                                                          <path d="M29.92,16.61l-3-7A1,1,0,0,0,26,9H23V7a1,1,0,0,0-1-1H3A1,1,0,0,0,2,7V24a1,1,0,0,0,1,1H5.14a4,4,0,0,0,7.72,0h6.28a4,4,0,0,0,7.72,0H29a1,1,0,0,0,1-1V17A1,1,0,0,0,29.92,16.61ZM23,11h2.34l2.14,5H23ZM9,26a2,2,0,1,1,2-2A2,2,0,0,1,9,26Zm10.14-3H12.86a4,4,0,0,0-7.72,0H4V8H21V20.56A4,4,0,0,0,19.14,23ZM23,26a2,2,0,1,1,2-2A2,2,0,0,1,23,26Zm5-3H26.86A4,4,0,0,0,23,20V18h5Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Logistics &amp; Transport</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/contact-center-software-for-financial-services/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>purchase</title>
                                                                          <path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6Zm0,2v3H4V8ZM4,24V13H28V24Z" transform="translate(0 0)" />
                                                                          <rect x={6} y={20} width={10} height={2} />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Financial Services</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/solutions/energy/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>bolt</title>
                                                                          <path d="M11.61,29.92a1,1,0,0,1-.6-1.07L12.83,17H8a1,1,0,0,1-1-1.23l3-13A1,1,0,0,1,11,2H21a1,1,0,0,1,.78.37,1,1,0,0,1,.2.85L20.25,11H25a1,1,0,0,1,.9.56,1,1,0,0,1-.11,1l-13,17A1,1,0,0,1,12,30,1.09,1.09,0,0,1,11.61,29.92ZM17.75,13l2-9H11.8L9.26,15h5.91L13.58,25.28,23,13Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} transform="translate(32 32) rotate(-180)" />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Energy</span>
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-dfceec1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="dfceec1" data-element_type="section">
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c9d31bc" data-id="c9d31bc" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-fc39ca0 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="fc39ca0" data-element_type="widget" data-widget_type="icon-list.default">
                                                              <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/solutions/outsource/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>headset</title>
                                                                          <path d="M25,10h-.06A9,9,0,0,0,7.06,10H7A5,5,0,0,0,7,20H9V11a7,7,0,0,1,14,0V21a4,4,0,0,1-3.17,3.91,4,4,0,1,0,.05,2A6,6,0,0,0,25,21V20a5,5,0,0,0,0-10ZM4,15a3,3,0,0,1,3-3v6A3,3,0,0,1,4,15ZM16,28a2,2,0,1,1,2-2A2,2,0,0,1,16,28Zm9-10V12a3,3,0,0,1,0,6Z" transform="translate(0)" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Outsource</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/solutions/automotive/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <rect x={13} y={19} width={6} height={2} />
                                                                          <path d="M25.4409,14,24.1687,9.45A2.009,2.009,0,0,0,22.2456,8H9.7544A2.0089,2.0089,0,0,0,7.8313,9.4507L6.5315,14H4v2H6v7a2.0025,2.0025,0,0,0,2,2v3h2V25H22v3h2V25a2.0025,2.0025,0,0,0,2-2V16h2V14ZM9.7544,10H22.2458l1.4285,5H8.3257ZM24,21v2H8V21h2V19H8V17H24v2H22v2Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Automotive</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/solutions/real-estate/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>enterprise</title>
                                                                          <rect x={8} y={8} width={2} height={4} />
                                                                          <rect x={8} y={14} width={2} height={4} />
                                                                          <rect x={14} y={8} width={2} height={4} />
                                                                          <rect x={14} y={14} width={2} height={4} />
                                                                          <rect x={8} y={20} width={2} height={4} />
                                                                          <rect x={14} y={20} width={2} height={4} />
                                                                          <path d="M30,14a2,2,0,0,0-2-2H22V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V30H30ZM4,4H20V28H4ZM22,28V14h6V28Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Real Estate</span>
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e41d11a" data-id="e41d11a" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-1975e80 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="1975e80" data-element_type="widget" data-widget_type="icon-list.default">
                                                              <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/solutions/tourism/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <path d="M28.5845,14.585l-3.12-1.8721A4.9951,4.9951,0,0,0,22.8921,12H7.7808L7.16,9.5151A1.9975,1.9975,0,0,0,5.2192,8H4a2.0023,2.0023,0,0,0-2,2v7a3.0033,3.0033,0,0,0,3,3h7v6a2.0023,2.0023,0,0,0,2,2h1.3071A2.0086,2.0086,0,0,0,17.18,26.7021L19.6929,20h7.3916a2.9152,2.9152,0,0,0,1.5-5.415ZM27.0845,18H18.3071l-3,8H14V18H5a1.0009,1.0009,0,0,1-1-1V10H5.2192l1,4H10v2h2V14h3v2h2V14h3v2h2V14h.8921a2.9977,2.9977,0,0,1,1.5434.4277l3.12,1.8721a.9154.9154,0,0,1-.4712,1.7Z" transform="translate(0 0)" />
                                                                          <path d="M14,4h1.3228l2.4,6h2.1545L17.18,3.2573A1.9906,1.9906,0,0,0,15.3228,2H14a2.0023,2.0023,0,0,0-2,2v6h2Z" transform="translate(0 0)" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Hospitality &amp; Travel</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/solutions/education/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>education</title>
                                                                          <path d="M26,30H24V27a5.0059,5.0059,0,0,0-5-5H13a5.0059,5.0059,0,0,0-5,5v3H6V27a7.0082,7.0082,0,0,1,7-7h6a7.0082,7.0082,0,0,1,7,7Z" />
                                                                          <path d="M5,6A1,1,0,0,0,4,7v9H6V7A1,1,0,0,0,5,6Z" />
                                                                          <path d="M4,2V4H9v7a7,7,0,0,0,14,0V4h5V2Zm7,2H21V7H11Zm5,12a5,5,0,0,1-5-5V9H21v2A5,5,0,0,1,16,16Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Education</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/solutions/technology/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <title>chart--3D</title>
                                                                          <path d="M28,23v3.5859l-5-5V15a1,1,0,0,0-.5527-.8945L17,11.3818V5.8281l2.5859,2.586L21,7,16,2,11,7l1.4141,1.4141L15,5.8281v5.5537L9.5527,14.1055A1,1,0,0,0,9,15v6.5859l-5,5V23H2v7H9V28H5.4141l4.7832-4.7832,5.3554,2.6777a1.001,1.001,0,0,0,.8946,0l5.3554-2.6777L26.5859,28H23v2h7V23Zm-13,.3818-4-2V16.6182l4,2Zm1-6.5L12.2363,15,16,13.1182,19.7637,15Zm5,4.5-4,2V18.6182l4-2Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Technology</span>
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                  </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-61f7b0b" data-id="61f7b0b" data-element_type="column">
                                                  <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-6f68843 elementor-widget elementor-widget-text-editor" data-id="6f68843" data-element_type="widget" data-widget_type="text-editor.default">
                                                      <div className="elementor-widget-container">
                                                        BY BUSINESS TYPE						
                                                      </div>
                                                    </div>
                                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-45cc789 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="45cc789" data-element_type="section">
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6d3ba68" data-id="6d3ba68" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-4e6ba4c elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="4e6ba4c" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/contact-center-software-for-small-medium-business/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                        </defs>
                                                                        <title>coffee</title>
                                                                        <rect x={2} y={28} width={28} height={2} />
                                                                        <path d="M24.5,11H8a2.002,2.002,0,0,0-2,2v8a5.0059,5.0059,0,0,0,5,5h8a5.0059,5.0059,0,0,0,5-5V20h.5a4.5,4.5,0,0,0,0-9ZM22,21a3.0033,3.0033,0,0,1-3,3H11a3.0033,3.0033,0,0,1-3-3V13H22Zm2.5-3H24V13h.5a2.5,2.5,0,0,1,0,5Z" transform="translate(0 0)" />
                                                                        <path d="M19,9H17V8.854a1.9883,1.9883,0,0,0-1.1055-1.7886L13.2109,5.7236A3.9788,3.9788,0,0,1,11,2.146V1h2V2.146a1.9892,1.9892,0,0,0,1.1055,1.7886l2.6836,1.3418A3.9792,3.9792,0,0,1,19,8.854Z" transform="translate(0 0)" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <span className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/contact-center-software-for-small-medium-business/" data-wpel-link="internal">
                                                                        Small &amp; Medium Business					</a>
                                                                    </span>
                                                                    <p className="elementor-icon-box-description">
                                                                      Grow your business					
                                                                    </p>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-4c7cf8d elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="4c7cf8d" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/contact-center-software-for-enterprise/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                        </defs>
                                                                        <title>enterprise</title>
                                                                        <rect x={8} y={8} width={2} height={4} />
                                                                        <rect x={8} y={14} width={2} height={4} />
                                                                        <rect x={14} y={8} width={2} height={4} />
                                                                        <rect x={14} y={14} width={2} height={4} />
                                                                        <rect x={8} y={20} width={2} height={4} />
                                                                        <rect x={14} y={20} width={2} height={4} />
                                                                        <path d="M30,14a2,2,0,0,0-2-2H22V4a2,2,0,0,0-2-2H4A2,2,0,0,0,2,4V30H30ZM4,4H20V28H4ZM22,28V14h6V28Z" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <span className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/contact-center-software-for-enterprise/" data-wpel-link="internal">
                                                                        Enterprise					</a>
                                                                    </span>
                                                                    <p className="elementor-icon-box-description">
                                                                      Upgrade your CX					
                                                                    </p>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-b9ef457 elementor-view-stacked elementor-position-left elementor-vertical-align-middle elementor-shape-circle elementor-mobile-position-top elementor-widget elementor-widget-icon-box" data-id="b9ef457" data-element_type="widget" data-widget_type="icon-box.default">
                                                              <div className="elementor-widget-container">
                                                                <div className="elementor-icon-box-wrapper">
                                                                  <div className="elementor-icon-box-icon">
                                                                    <a href="https://callcenterstudio.com/bpo/" className="elementor-icon elementor-animation-" tabIndex={-1} data-wpel-link="internal">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                        <defs>
                                                                          <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                        </defs>
                                                                        <title>shop</title>
                                                                        <path d="M30,10.68l-2-6A1,1,0,0,0,27,4H5a1,1,0,0,0-1,.68l-2,6A1.19,1.19,0,0,0,2,11v6a1,1,0,0,0,1,1H4V28H6V18h6V28H28V18h1a1,1,0,0,0,1-1V11A1.19,1.19,0,0,0,30,10.68ZM26,26H14V18H26Zm2-10H24V12H22v4H17V12H15v4H10V12H8v4H4V11.16L5.72,6H26.28L28,11.16Z" transform="translate(0)" />
                                                                        <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                      </svg>
                                                                    </a>
                                                                  </div>
                                                                  <div className="elementor-icon-box-content">
                                                                    <span className="elementor-icon-box-title">
                                                                      <a href="https://callcenterstudio.com/bpo/" data-wpel-link="internal">
                                                                        BPO/Outsourcing					</a>
                                                                    </span>
                                                                    <p className="elementor-icon-box-description">
                                                                      Elevate your operation					
                                                                    </p>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                  </div>
                                                </div>
                                                <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-6e300f3" data-id="6e300f3" data-element_type="column">
                                                  <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-693a9d7 elementor-widget elementor-widget-text-editor" data-id="693a9d7" data-element_type="widget" data-widget_type="text-editor.default">
                                                      <div className="elementor-widget-container">
                                                        BY ROLE						
                                                      </div>
                                                    </div>
                                                    <section className="elementor-section elementor-inner-section elementor-element elementor-element-d34cc3a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d34cc3a" data-element_type="section">
                                                      <div className="elementor-container elementor-column-gap-default">
                                                        <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-652743b" data-id="652743b" data-element_type="column">
                                                          <div className="elementor-widget-wrap elementor-element-populated">
                                                            <div className="elementor-element elementor-element-4d112ff elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="4d112ff" data-element_type="widget" data-widget_type="icon-list.default">
                                                              <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/contact-center-manager/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <path d="M25,10H7a3.0033,3.0033,0,0,0-3,3v6a2.0023,2.0023,0,0,0,2,2v7a2.0023,2.0023,0,0,0,2,2h4a2.0023,2.0023,0,0,0,2-2V16H12V28H8V19H6V13a1.0009,1.0009,0,0,1,1-1H25a1.0009,1.0009,0,0,1,1,1v6H24v9H20V16H18V28a2.0023,2.0023,0,0,0,2,2h4a2.0023,2.0023,0,0,0,2-2V21a2.0023,2.0023,0,0,0,2-2V13A3.0033,3.0033,0,0,0,25,10Z" transform="translate(0 0)" />
                                                                          <path d="M10,9a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,10,9Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,10,3Z" transform="translate(0 0)" />
                                                                          <path d="M22,9a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,22,9Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,22,3Z" transform="translate(0 0)" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Contact Center Manager</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/contact-center-software-for-it-director/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <title>chart--3D</title>
                                                                          <path d="M28,23v3.5859l-5-5V15a1,1,0,0,0-.5527-.8945L17,11.3818V5.8281l2.5859,2.586L21,7,16,2,11,7l1.4141,1.4141L15,5.8281v5.5537L9.5527,14.1055A1,1,0,0,0,9,15v6.5859l-5,5V23H2v7H9V28H5.4141l4.7832-4.7832,5.3554,2.6777a1.001,1.001,0,0,0,.8946,0l5.3554-2.6777L26.5859,28H23v2h7V23Zm-13,.3818-4-2V16.6182l4,2Zm1-6.5L12.2363,15,16,13.1182,19.7637,15Zm5,4.5-4,2V18.6182l4-2Z" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">IT Director</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/contact-center-solution-for-agent/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>events--alt</title>
                                                                          <path d="M18,31h2V29a1.0006,1.0006,0,0,1,1-1h6a1.0006,1.0006,0,0,1,1,1v2h2V29a3.0033,3.0033,0,0,0-3-3H21a3.0033,3.0033,0,0,0-3,3Z" transform="translate(0 0)" />
                                                                          <path d="M24,25a4,4,0,1,1,4-4A4.0039,4.0039,0,0,1,24,25Zm0-6a2,2,0,1,0,2,2A2.0027,2.0027,0,0,0,24,19Z" transform="translate(0 0)" />
                                                                          <path d="M2,31H4V29a1.0009,1.0009,0,0,1,1-1h6a1.0009,1.0009,0,0,1,1,1v2h2V29a3.0033,3.0033,0,0,0-3-3H5a3.0033,3.0033,0,0,0-3,3Z" transform="translate(0 0)" />
                                                                          <path d="M8,25a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,8,25Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,8,19Z" transform="translate(0 0)" />
                                                                          <path d="M18,16h2V14a1.0009,1.0009,0,0,1,1-1h6a1.0009,1.0009,0,0,1,1,1v2h2V14a3.0033,3.0033,0,0,0-3-3H21a3.0033,3.0033,0,0,0-3,3Z" transform="translate(0 0)" />
                                                                          <path d="M24,10a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,24,10Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,24,4Z" transform="translate(0 0)" />
                                                                          <path d="M2,16H4V14a1.0013,1.0013,0,0,1,1-1h6a1.0013,1.0013,0,0,1,1,1v2h2V14a3.0033,3.0033,0,0,0-3-3H5a3.0033,3.0033,0,0,0-3,3Z" transform="translate(0 0)" />
                                                                          <path d="M8,10a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,8,10ZM8,4a2,2,0,1,0,2,2A2.002,2.002,0,0,0,8,4Z" transform="translate(0 0)" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">Agent</span>
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-7e0fd68 elementor-widget elementor-widget-text-editor" data-id="7e0fd68" data-element_type="widget" data-widget_type="text-editor.default">
                                                              <div className="elementor-widget-container">
                                                                INTEGRATIONS						
                                                              </div>
                                                            </div>
                                                            <div className="elementor-element elementor-element-3b0e823 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="3b0e823" data-element_type="widget" data-widget_type="icon-list.default">
                                                              <div className="elementor-widget-container">
                                                                <ul className="elementor-icon-list-items">
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/api/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>data--unstructured</title>
                                                                          <path d="M6,24a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4A4,4,0,0,0,6,22Z" />
                                                                          <path d="M16,4a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4A4,4,0,0,0,16,2Z" />
                                                                          <path d="M26,4a2,2,0,1,1-2,2,2,2,0,0,1,2-2m0-2a4,4,0,1,0,4,4A4,4,0,0,0,26,2Z" />
                                                                          <path d="M18,24v4H14V24h4m2-2H12v8h8Z" />
                                                                          <path d="M27,22.14V17a2,2,0,0,0-2-2H7V10h3V2H2v8H5v5a2,2,0,0,0,2,2H25v5.14a4,4,0,1,0,2,0ZM4,4H8V8H4ZM26,28a2,2,0,1,1,2-2A2,2,0,0,1,26,28Z" />
                                                                          <g id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>">
                                                                            <rect className="cls-1" width={32} height={32} />
                                                                          </g>
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">API</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/crm/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                          </defs>
                                                                          <circle cx={23} cy="23.9999" r={2} />
                                                                          <path d="M30.7769,23.4785A8.64,8.64,0,0,0,23,18a8.64,8.64,0,0,0-7.7769,5.4785L15,24l.2231.5215A8.64,8.64,0,0,0,23,30a8.64,8.64,0,0,0,7.7769-5.4785L31,24ZM23,28a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,23,28Z" transform="translate(0 -0.0001)" />
                                                                          <path d="M12.3989,20.8A6,6,0,1,1,22,16H20a4,4,0,1,0-6.4,3.2Z" transform="translate(0 -0.0001)" />
                                                                          <path d="M29.3047,11.0439,26.9441,6.9561a1.9977,1.9977,0,0,0-2.3728-.8946l-2.4341.8233a11.0419,11.0419,0,0,0-1.312-.7583l-.5037-2.5186A2,2,0,0,0,18.36,2H13.64a2,2,0,0,0-1.9611,1.6079l-.5037,2.5186A10.9666,10.9666,0,0,0,9.8481,6.88L7.4287,6.0615a1.9977,1.9977,0,0,0-2.3728.8946L2.6953,11.0439a2.0006,2.0006,0,0,0,.4119,2.5025l1.9309,1.6968C5.021,15.4946,5,15.7446,5,16c0,.2578.01.5127.0278.7656l-1.9206,1.688a2.0006,2.0006,0,0,0-.4119,2.5025l2.3606,4.0878a1.9977,1.9977,0,0,0,2.3728.8946l2.4341-.8233a10.9736,10.9736,0,0,0,1.312.7583l.5037,2.5186A2,2,0,0,0,13.64,30H15V28H13.64l-.71-3.5508a9.0953,9.0953,0,0,1-2.6948-1.5713l-3.4468,1.166-2.36-4.0878L7.1528,17.561a8.9263,8.9263,0,0,1-.007-3.1279L4.4275,12.0439,6.7886,7.9561l3.4267,1.1591a9.0305,9.0305,0,0,1,2.7141-1.5644L13.64,4H18.36l.71,3.5508a9.0978,9.0978,0,0,1,2.6948,1.5713l3.4468-1.166,2.36,4.0878-2.7978,2.4522L26.0923,16l2.8-2.4536A2.0006,2.0006,0,0,0,29.3047,11.0439Z" transform="translate(0 -0.0001)" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">CRM</span>
                                                                    </a>
                                                                  </li>
                                                                  <li className="elementor-icon-list-item">
                                                                    <a href="https://callcenterstudio.com/uc/" data-wpel-link="internal">
                                                                      <span className="elementor-icon-list-icon">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                          <defs>
                                                                            <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                          </defs>
                                                                          <title>share-knowledge</title>
                                                                          <path d="M27,25H21a3,3,0,0,0-3,3v2h2V28a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2h2V28A3,3,0,0,0,27,25Z" transform="translate(0 0)" />
                                                                          <path d="M20,20a4,4,0,1,0,4-4A4,4,0,0,0,20,20Zm6,0a2,2,0,1,1-2-2A2,2,0,0,1,26,20Z" transform="translate(0 0)" />
                                                                          <path d="M6,21V20H4v1a7,7,0,0,0,7,7h3V26H11A5,5,0,0,1,6,21Z" transform="translate(0 0)" />
                                                                          <rect x={19} y={10} width={7} height={2} />
                                                                          <rect x={19} y={6} width={10} height={2} />
                                                                          <rect x={19} y={2} width={10} height={2} />
                                                                          <path d="M11,11H5a3,3,0,0,0-3,3v2H4V14a1,1,0,0,1,1-1h6a1,1,0,0,1,1,1v2h2V14A3,3,0,0,0,11,11Z" transform="translate(0 0)" />
                                                                          <path d="M8,10A4,4,0,1,0,4,6,4,4,0,0,0,8,10ZM8,4A2,2,0,1,1,6,6,2,2,0,0,1,8,4Z" transform="translate(0 0)" />
                                                                          <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                        </svg>
                                                                      </span>
                                                                      <span className="elementor-icon-list-text">UC</span>
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </section>
                                                  </div>
                                                </div>
                                              </div>
                                            </section>
                                          </div>
                                        </div>
                                      </li>
                                      <li onMouseOver={(e)=> showSubNav(dropdown4)} ref={dropdown4} id="jet-menu-item-27033" className="jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-has-roll-up jet-mega-menu-item jet-regular-item jet-menu-item-has-children jet-menu-item-27033">
                                        <a className="top-level-link">
                                          <div className="jet-menu-item-wrapper">
                                            <div className="jet-menu-title">Resources</div>
                                            <i className="jet-dropdown-arrow fa fa-angle-down" />
                                          </div>
                                        </a>
                                        <div className="jet-sub-mega-menu" data-template-id={33169}>
                                          <div data-elementor-type="wp-post" data-elementor-id={33169} className="elementor elementor-33169" data-elementor-post-type="jet-menu">
                                            <section className="elementor-section elementor-top-section elementor-element elementor-element-4b77996 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4b77996" data-element_type="section">
                                              <div className="elementor-container elementor-column-gap-default">
                                                <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-86d5aca" data-id="86d5aca" data-element_type="column">
                                                  <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-9ef3121 elementor-widget elementor-widget-text-editor" data-id="9ef3121" data-element_type="widget" data-widget_type="text-editor.default">
                                                      <div className="elementor-widget-container">
                                                        LEARN						
                                                      </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-6b5ae1a elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="6b5ae1a" data-element_type="widget" data-widget_type="icon-list.default">
                                                      <div className="elementor-widget-container">
                                                        <ul className="elementor-icon-list-items">
                                                          <li className="elementor-icon-list-item">
                                                            <a href="https://callcenterstudio.com/blog/" data-wpel-link="internal">
                                                              <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32" id="icon">
                                                                  <defs>
                                                                    <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                  </defs>
                                                                  <rect x={8} y={6} width={12} height={2} />
                                                                  <rect x={8} y={10} width={12} height={2} />
                                                                  <rect x={8} y={14} width={6} height={2} />
                                                                  <rect x={8} y={24} width={4} height={2} />
                                                                  <path d="M29.707,19.293l-3-3a.9994.9994,0,0,0-1.414,0L16,25.5859V30h4.4141l9.2929-9.293A.9994.9994,0,0,0,29.707,19.293ZM19.5859,28H18V26.4141l5-5L24.5859,23ZM26,21.5859,24.4141,20,26,18.4141,27.5859,20Z" />
                                                                  <path d="M12,30H6a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,6,2H22a2.0021,2.0021,0,0,1,2,2V14H22V4H6V28h6Z" />
                                                                  <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                </svg>
                                                              </span>
                                                              <span className="elementor-icon-list-text">Blog</span>
                                                            </a>
                                                          </li>
                                                          <li className="elementor-icon-list-item">
                                                            <a href="https://callcenterstudio.com/whitepapers/" data-wpel-link="internal">
                                                              <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                  <defs>
                                                                    <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                  </defs>
                                                                  <title>catalog</title>
                                                                  <path d="M26,2H8A2,2,0,0,0,6,4V8H4v2H6v5H4v2H6v5H4v2H6v4a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V4A2,2,0,0,0,26,2Zm0,26H8V24h2V22H8V17h2V15H8V10h2V8H8V4H26Z" transform="translate(0 0)" />
                                                                  <rect x={14} y={8} width={8} height={2} />
                                                                  <rect x={14} y={15} width={8} height={2} />
                                                                  <rect x={14} y={22} width={8} height={2} />
                                                                  <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                </svg>
                                                              </span>
                                                              <span className="elementor-icon-list-text">E-book / Whitepapers</span>
                                                            </a>
                                                          </li>
                                                          <li className="elementor-icon-list-item">
                                                            <a href="https://callcenterstudio.com/api/" data-wpel-link="internal">
                                                              <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="icon" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" style={{enableBackground: 'new 0 0 32 32'}} xmlSpace="preserve">
                                                                  <style type="text/css" dangerouslySetInnerHTML={{__html: "\t.st0{fill:none;}" }} />
                                                                  <polygon points="23.6,21.4 27.2,25 27.2,25 23.6,28.6 25,30 30,25 25,20 " />
                                                                  <polygon points="20.4,21.4 16.8,25 16.8,25 20.4,28.6 19,30 14,25 19,20 " />
                                                                  <path d="M28,8H16l-3.4-3.4C12.2,4.2,11.7,4,11.2,4H4C2.9,4,2,4.9,2,6v20c0,1.1,0.9,2,2,2h7v-2H4V6h7.2l3.4,3.4l0.6,0.6H28v8h2v-8 C30,8.9,29.1,8,28,8z" />
                                                                  <rect id="_x3C_Transparent_Rectangle_x3E__589_" className="st0" width={32} height={32} />
                                                                </svg>
                                                              </span>
                                                              <span className="elementor-icon-list-text">Documentation for Dev</span>
                                                            </a>
                                                          </li>
                                                          <li className="elementor-icon-list-item">
                                                            <a href="https://callcenterstudio.com/faq/" data-wpel-link="internal">
                                                              <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                  <defs>
                                                                    <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                  </defs>
                                                                  <title>list--checked</title>
                                                                  <rect x={16} y={8} width={14} height={2} />
                                                                  <rect x={16} y={22} width={14} height={2} />
                                                                  <path d="M10,14H4a2.0023,2.0023,0,0,1-2-2V6A2.0023,2.0023,0,0,1,4,4h6a2.0023,2.0023,0,0,1,2,2v6A2.0023,2.0023,0,0,1,10,14ZM4,6v6h6.0012L10,6Z" />
                                                                  <path d="M10,28H4a2.0023,2.0023,0,0,1-2-2V20a2.0023,2.0023,0,0,1,2-2h6a2.0023,2.0023,0,0,1,2,2v6A2.0023,2.0023,0,0,1,10,28ZM4,20v6h6.0012L10,20Z" />
                                                                  <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                </svg>
                                                              </span>
                                                              <span className="elementor-icon-list-text">FAQ</span>
                                                            </a>
                                                          </li>
                                                          <li className="elementor-icon-list-item">
                                                            <a href="https://callcenterstudio.com/glossary/" data-wpel-link="internal">
                                                              <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                  <defs>
                                                                    <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                  </defs>
                                                                  <title>headset</title>
                                                                  <path d="M25,10h-.06A9,9,0,0,0,7.06,10H7A5,5,0,0,0,7,20H9V11a7,7,0,0,1,14,0V21a4,4,0,0,1-3.17,3.91,4,4,0,1,0,.05,2A6,6,0,0,0,25,21V20a5,5,0,0,0,0-10ZM4,15a3,3,0,0,1,3-3v6A3,3,0,0,1,4,15ZM16,28a2,2,0,1,1,2-2A2,2,0,0,1,16,28Zm9-10V12a3,3,0,0,1,0,6Z" transform="translate(0)" />
                                                                  <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                </svg>
                                                              </span>
                                                              <span className="elementor-icon-list-text">Contact Center Glossary</span>
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-07fa8f2" data-id="07fa8f2" data-element_type="column">
                                                  <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-2113d35 elementor-widget elementor-widget-text-editor" data-id="2113d35" data-element_type="widget" data-widget_type="text-editor.default">
                                                      <div className="elementor-widget-container">
                                                        INSPIRE						
                                                      </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-16ad475 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="16ad475" data-element_type="widget" data-widget_type="icon-list.default">
                                                      <div className="elementor-widget-container">
                                                        <ul className="elementor-icon-list-items">
                                                          <li className="elementor-icon-list-item">
                                                            <a href="https://callcenterstudio.com/testimonials/" data-wpel-link="internal">
                                                              <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                  <defs>
                                                                    <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                  </defs>
                                                                  <title>chat-bot</title>
                                                                  <path d="M16,19a6.9908,6.9908,0,0,1-5.833-3.1287l1.666-1.1074a5.0007,5.0007,0,0,0,8.334,0l1.666,1.1074A6.9908,6.9908,0,0,1,16,19Z" />
                                                                  <path d="M20,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,20,8Z" />
                                                                  <path d="M12,8a2,2,0,1,0,2,2A1.9806,1.9806,0,0,0,12,8Z" />
                                                                  <path d="M17.7358,30,16,29l4-7h6a1.9966,1.9966,0,0,0,2-2V6a1.9966,1.9966,0,0,0-2-2H6A1.9966,1.9966,0,0,0,4,6V20a1.9966,1.9966,0,0,0,2,2h9v2H6a3.9993,3.9993,0,0,1-4-4V6A3.9988,3.9988,0,0,1,6,2H26a3.9988,3.9988,0,0,1,4,4V20a3.9993,3.9993,0,0,1-4,4H21.1646Z" />
                                                                  <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                </svg>
                                                              </span>
                                                              <span className="elementor-icon-list-text">Customer Reviews</span>
                                                            </a>
                                                          </li>
                                                          <li className="elementor-icon-list-item">
                                                            <a href="https://callcenterstudio.com/partnerships-program/" data-wpel-link="internal">
                                                              <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                  <defs>
                                                                    <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                  </defs>
                                                                  <path d="M25,10H7a3.0033,3.0033,0,0,0-3,3v6a2.0023,2.0023,0,0,0,2,2v7a2.0023,2.0023,0,0,0,2,2h4a2.0023,2.0023,0,0,0,2-2V16H12V28H8V19H6V13a1.0009,1.0009,0,0,1,1-1H25a1.0009,1.0009,0,0,1,1,1v6H24v9H20V16H18V28a2.0023,2.0023,0,0,0,2,2h4a2.0023,2.0023,0,0,0,2-2V21a2.0023,2.0023,0,0,0,2-2V13A3.0033,3.0033,0,0,0,25,10Z" transform="translate(0 0)" />
                                                                  <path d="M10,9a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,10,9Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,10,3Z" transform="translate(0 0)" />
                                                                  <path d="M22,9a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,22,9Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,22,3Z" transform="translate(0 0)" />
                                                                  <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                </svg>
                                                              </span>
                                                              <span className="elementor-icon-list-text">Partners</span>
                                                            </a>
                                                          </li>
                                                          <li className="elementor-icon-list-item">
                                                            <a href="https://callcenterstudio.com/success-stories/" data-wpel-link="internal">
                                                              <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                  <defs>
                                                                    <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                  </defs>
                                                                  <title>catalog</title>
                                                                  <path d="M26,2H8A2,2,0,0,0,6,4V8H4v2H6v5H4v2H6v5H4v2H6v4a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V4A2,2,0,0,0,26,2Zm0,26H8V24h2V22H8V17h2V15H8V10h2V8H8V4H26Z" transform="translate(0 0)" />
                                                                  <rect x={14} y={8} width={8} height={2} />
                                                                  <rect x={14} y={15} width={8} height={2} />
                                                                  <rect x={14} y={22} width={8} height={2} />
                                                                  <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                </svg>
                                                              </span>
                                                              <span className="elementor-icon-list-text">Case Studies</span>
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-c45bc90" data-id="c45bc90" data-element_type="column">
                                                  <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-a7a52a0 elementor-widget elementor-widget-text-editor" data-id="a7a52a0" data-element_type="widget" data-widget_type="text-editor.default">
                                                      <div className="elementor-widget-container">
                                                        CONNECT						
                                                      </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-5b913e6 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="5b913e6" data-element_type="widget" data-widget_type="icon-list.default">
                                                      <div className="elementor-widget-container">
                                                        <ul className="elementor-icon-list-items">
                                                          <li className="elementor-icon-list-item">
                                                            <a href="https://callcenterstudio.com/contact-us/" data-wpel-link="internal">
                                                              <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="icon" x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" style={{enableBackground: 'new 0 0 32 32'}} xmlSpace="preserve">
                                                                  <style type="text/css" dangerouslySetInnerHTML={{__html: "\t.st0{fill:none;}" }} />
                                                                  <path d="M28,2H18c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h2.4l1.7,3l1.7-1l-2.3-4H18V4h10v6h-3v2h3c1.1,0,2-0.9,2-2V4 C30,2.9,29.1,2,28,2z" />
                                                                  <path d="M14.7,31L13,30l3.5-6H22c1.1,0,2-0.9,2-2v-5h2v5c0,2.2-1.8,4-4,4h-4.4L14.7,31z" />
                                                                  <circle cx={10} cy={17} r={1} />
                                                                  <circle cx={14} cy={17} r={1} />
                                                                  <circle cx={18} cy={17} r={1} />
                                                                  <path d="M12,26H6c-2.2,0-4-1.8-4-4V12c0-2.2,1.8-4,4-4h8v2H6c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h6V26z" />
                                                                  <rect id="_x3C_Transparent_Rectangle_x3E__232_" y={0} className="st0" width={32} height={32} />
                                                                </svg>
                                                              </span>
                                                              <span className="elementor-icon-list-text">Contact Us</span>
                                                            </a>
                                                          </li>
                                                          <li className="elementor-icon-list-item">
                                                            <a href="https://callcenterstudio.com/leadership/" data-wpel-link="internal">
                                                              <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                  <defs>
                                                                    <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                  </defs>
                                                                  <title>events--alt</title>
                                                                  <path d="M18,31h2V29a1.0006,1.0006,0,0,1,1-1h6a1.0006,1.0006,0,0,1,1,1v2h2V29a3.0033,3.0033,0,0,0-3-3H21a3.0033,3.0033,0,0,0-3,3Z" transform="translate(0 0)" />
                                                                  <path d="M24,25a4,4,0,1,1,4-4A4.0039,4.0039,0,0,1,24,25Zm0-6a2,2,0,1,0,2,2A2.0027,2.0027,0,0,0,24,19Z" transform="translate(0 0)" />
                                                                  <path d="M2,31H4V29a1.0009,1.0009,0,0,1,1-1h6a1.0009,1.0009,0,0,1,1,1v2h2V29a3.0033,3.0033,0,0,0-3-3H5a3.0033,3.0033,0,0,0-3,3Z" transform="translate(0 0)" />
                                                                  <path d="M8,25a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,8,25Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,8,19Z" transform="translate(0 0)" />
                                                                  <path d="M18,16h2V14a1.0009,1.0009,0,0,1,1-1h6a1.0009,1.0009,0,0,1,1,1v2h2V14a3.0033,3.0033,0,0,0-3-3H21a3.0033,3.0033,0,0,0-3,3Z" transform="translate(0 0)" />
                                                                  <path d="M24,10a4,4,0,1,1,4-4A4.0042,4.0042,0,0,1,24,10Zm0-6a2,2,0,1,0,2,2A2.0023,2.0023,0,0,0,24,4Z" transform="translate(0 0)" />
                                                                  <path d="M2,16H4V14a1.0013,1.0013,0,0,1,1-1h6a1.0013,1.0013,0,0,1,1,1v2h2V14a3.0033,3.0033,0,0,0-3-3H5a3.0033,3.0033,0,0,0-3,3Z" transform="translate(0 0)" />
                                                                  <path d="M8,10a4,4,0,1,1,4-4A4.0045,4.0045,0,0,1,8,10ZM8,4a2,2,0,1,0,2,2A2.002,2.002,0,0,0,8,4Z" transform="translate(0 0)" />
                                                                  <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                </svg>
                                                              </span>
                                                              <span className="elementor-icon-list-text">Leadership</span>
                                                            </a>
                                                          </li>
                                                          <li className="elementor-icon-list-item">
                                                            <a href="https://callcenterstudio.com/customer-support/" data-wpel-link="internal">
                                                              <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32" id="icon">
                                                                  <defs>
                                                                    <style dangerouslySetInnerHTML={{__html: "      .cls-1 {        fill: none;      }    " }} />
                                                                  </defs>
                                                                  <rect x={8} y={6} width={12} height={2} />
                                                                  <rect x={8} y={10} width={12} height={2} />
                                                                  <rect x={8} y={14} width={6} height={2} />
                                                                  <rect x={8} y={24} width={4} height={2} />
                                                                  <path d="M29.707,19.293l-3-3a.9994.9994,0,0,0-1.414,0L16,25.5859V30h4.4141l9.2929-9.293A.9994.9994,0,0,0,29.707,19.293ZM19.5859,28H18V26.4141l5-5L24.5859,23ZM26,21.5859,24.4141,20,26,18.4141,27.5859,20Z" />
                                                                  <path d="M12,30H6a2.0021,2.0021,0,0,1-2-2V4A2.0021,2.0021,0,0,1,6,2H22a2.0021,2.0021,0,0,1,2,2V14H22V4H6V28h6Z" />
                                                                  <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                </svg>
                                                              </span>
                                                              <span className="elementor-icon-list-text">Support Center</span>
                                                            </a>
                                                          </li>
                                                          <li className="elementor-icon-list-item">
                                                            <a href="https://callcenterstudio.com/career/" data-wpel-link="internal">
                                                              <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" id="icon" viewBox="0 0 32 32">
                                                                  <defs>
                                                                    <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                  </defs>
                                                                  <title>education</title>
                                                                  <path d="M26,30H24V27a5.0059,5.0059,0,0,0-5-5H13a5.0059,5.0059,0,0,0-5,5v3H6V27a7.0082,7.0082,0,0,1,7-7h6a7.0082,7.0082,0,0,1,7,7Z" />
                                                                  <path d="M5,6A1,1,0,0,0,4,7v9H6V7A1,1,0,0,0,5,6Z" />
                                                                  <path d="M4,2V4H9v7a7,7,0,0,0,14,0V4h5V2Zm7,2H21V7H11Zm5,12a5,5,0,0,1-5-5V9H21v2A5,5,0,0,1,16,16Z" />
                                                                  <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                </svg>
                                                              </span>
                                                              <span className="elementor-icon-list-text">Career</span>
                                                            </a>
                                                          </li>
                                                          <li className="elementor-icon-list-item">
                                                            <a href="https://callcenterstudio.com/news/" data-wpel-link="internal">
                                                              <span className="elementor-icon-list-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" id="icon" width={32} height={32} viewBox="0 0 32 32">
                                                                  <defs>
                                                                    <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:none;}" }} />
                                                                  </defs>
                                                                  <title>sunny</title>
                                                                  <path d="M16,12a4,4,0,1,1-4,4,4.0045,4.0045,0,0,1,4-4m0-2a6,6,0,1,0,6,6,6,6,0,0,0-6-6Z" transform="translate(0 0.0049)" />
                                                                  <rect x="6.8536" y="5.3745" width="1.9998" height="4.958" transform="translate(-3.253 7.8584) rotate(-45)" />
                                                                  <rect x={2} y="15.0049" width={5} height={2} />
                                                                  <rect x="5.3745" y="23.1466" width="4.958" height="1.9998" transform="translate(-14.7739 12.6305) rotate(-45)" />
                                                                  <rect x={15} y="25.0049" width={2} height={5} />
                                                                  <rect x="23.1466" y="21.6675" width="1.9998" height="4.958" transform="translate(-10.0018 24.1514) rotate(-45)" />
                                                                  <rect x={25} y="15.0049" width={5} height={2} />
                                                                  <rect x="21.6675" y="6.8536" width="4.958" height="1.9998" transform="translate(1.5191 19.3793) rotate(-45)" />
                                                                  <rect x={15} y="2.0049" width={2} height={5} />
                                                                  <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width={32} height={32} />
                                                                </svg>
                                                              </span>
                                                              <span className="elementor-icon-list-text">News</span>
                                                            </a>
                                                          </li>
                                                        </ul>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-42d6569" data-id="42d6569" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                                                  <div className="elementor-widget-wrap elementor-element-populated">
                                                    <div className="elementor-element elementor-element-35ffd62 elementor-widget elementor-widget-text-editor" data-id="35ffd62" data-element_type="widget" data-widget_type="text-editor.default">
                                                      <div className="elementor-widget-container">
                                                        WHY CALL CENTER STUDIO?						
                                                      </div>
                                                    </div>
                                                    <div className="elementor-element elementor-element-4d37448 elementor-widget elementor-widget-video" data-id="4d37448" data-element_type="widget" data-settings="{&quot;youtube_url&quot;:&quot;https:\/\/www.youtube.com\/watch?v=jqDNfWWoUb8&quot;,&quot;video_type&quot;:&quot;youtube&quot;,&quot;controls&quot;:&quot;yes&quot;}" data-widget_type="video.default">
                                                      <div className="elementor-widget-container">
                                                        <div className="elementor-wrapper elementor-open-inline">
                                                          <div className="elementor-video" />
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </section>
                                          </div>
                                        </div>
                                      </li>
                                      <li id="jet-menu-item-48008" className="jet-menu-item jet-menu-item-type-post_type jet-menu-item-object-page jet-has-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-48008">
                                        <a href="https://callcenterstudio.com/pricing/" className="top-level-link" data-wpel-link="internal">
                                          <div className="jet-menu-item-wrapper">
                                            <div className="jet-menu-title">Pricing</div>
                                          </div>
                                        </a>
                                      </li>
                                      <li id="jet-menu-item-46059" className="jet-menu-item jet-menu-item-type-custom jet-menu-item-object-custom jet-has-roll-up jet-simple-menu-item jet-regular-item jet-menu-item-46059">
                                        <a href="https://callcenterstudio.com/partnerships-program/" className="top-level-link" data-wpel-link="internal">
                                          <div className="jet-menu-item-wrapper">
                                            <div className="jet-menu-title">Partners</div>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="elementor-section elementor-inner-section elementor-element elementor-element-5340874 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id={5340874} data-element_type="section">
                    <div className="elementor-container elementor-column-gap-default">
                      <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-66f67cd" data-id="66f67cd" data-element_type="column">
                        <div className="elementor-widget-wrap elementor-element-populated">
                          <div className="elementor-element elementor-element-213fc9f elementor-widget__width-auto elementor-widget elementor-widget-image" data-id="213fc9f" data-element_type="widget" data-widget_type="image.default">
                            <div className="elementor-widget-container">
                              <style dangerouslySetInnerHTML={{__html: "/*! elementor - v3.18.0 - 08-12-2023 */\n                            .elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=\".svg\"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}\n                          " }} />
                              <a href="https://callcenterstudio.com" data-wpel-link="internal">
                                <img style={{width:'66px'}} src="https://backend.globalchat.us/uploads/logo_58c930c6d8.png" className="attachment-full size-full wp-image-21" alt="Call Center Studio Primary Logo" />								</a>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-04e047d elementor-align-right elementor-hidden-desktop elementor-widget-mobile__width-auto elementor-widget elementor-widget-button" data-id="04e047d" data-element_type="widget" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <a className="elementor-button elementor-button-link elementor-size-sm" href="#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjM1ODg4IiwidG9nZ2xlIjp0cnVlfQ%3D%3D">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-icon elementor-align-icon-left">
                                      <i aria-hidden="true" className="fas fa-bars" />			</span>
                                    <span className="elementor-button-text" />
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="elementor-element elementor-element-9e086f2 elementor-widget__width-auto elementor-hidden-tablet elementor-hidden-mobile elementor-align-right elementor-widget elementor-widget-button" data-id="9e086f2" data-element_type="widget" data-widget_type="button.default">
                            <div className="elementor-widget-container">
                              <div className="elementor-button-wrapper">
                                <a className="elementor-button elementor-button-link elementor-size-sm" href="https://callcenterstudio.com/get-a-quote-zoho/" data-wpel-link="internal">
                                  <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">Get Started</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
          <section className="elementor-section elementor-top-section elementor-element elementor-element-6a403d6 elementor-hidden-desktop elementor-hidden-tablet elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6a403d6" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3bb40d0" data-id="3bb40d0" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-e7d1e56 elementor-widget elementor-widget-breadcrumbs" data-id="e7d1e56" data-element_type="widget" data-widget_type="breadcrumbs.default">
                    <div className="elementor-widget-container">
                      <div><span className="last">Home</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="elementor-section elementor-top-section elementor-element elementor-element-2d2b817 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2d2b817" data-element_type="section">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-acf7971" data-id="acf7971" data-element_type="column">
                <div className="elementor-widget-wrap">
                </div>
              </div>
            </div>
          </section>
        </div>
</>
  )
}

export default Navigation
