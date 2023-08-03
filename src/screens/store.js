import React from "react";
import instaicon from "../Assets/Images/instagram.svg";
import Iframe from "react-iframe";
export default function Store() {
  return (
    <div
      style={{
        marginTop: 100,
        marginBottom: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "whitesmoke",
      }}
    >
      <iframe
        title="YouTube video player"
        sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
        style={{ width: "120px", height: "240px", marginRight: "20px" }}
        width="100%"
        height="100%"
        // style={{ minHeight: "50vh" }}
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        frameborder="0"
        src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=khannakunal07-21&language=en_IN&marketplace=amazon&region=IN&placement=B09QS4LNLP&asins=B09QS4LNLP&linkId=8664b763d49997b28d58fddffd9cb99f&show_border=true&link_opens_in_new_window=true"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
      <iframe
        title="YouTube video player"
        sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
        style={{ width: "120px", height: "240px", marginRight: "20px" }}
        width="100%"
        height="100%"
        // style={{ minHeight: "50vh" }}
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        frameborder="0"
        src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=khannakunal07-21&language=en_IN&marketplace=amazon&region=IN&placement=B0BHWNYL2Q&asins=B0BHWNYL2Q&linkId=4b3a89c2382d3b4e5775cab1bbac5d82&show_border=true&link_opens_in_new_window=true"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
}
