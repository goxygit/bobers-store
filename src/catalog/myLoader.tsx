import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
    <ContentLoader
        speed={2}
        width={260}
        height={420}
        viewBox="0 0 260 420"
        backgroundColor="#e6e6e6"
        foregroundColor="#cccccc"
    >
        <rect x="2" y="5" rx="0" ry="0" width="173" height="208" />
        <rect x="7" y="223" rx="0" ry="0" width="135" height="24" />
        <rect x="9" y="281" rx="0" ry="0" width="91" height="17" />
        <rect x="1" y="317" rx="0" ry="0" width="169" height="34" />
    </ContentLoader>
)

export default MyLoader
