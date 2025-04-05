import React from "react";
import Icon from "./Icon.tsx";
import img_git from "./assets/git-logo.png";
import img_linked from "./assets/linked-logo.png";
import img_phone from "./assets/phone.png";

export const GitHubIconSmall = <Icon silhouette={img_git} link={'https://github.com/bigdog765'} size={40}/>;
export const LinkedInIconSmall = <Icon silhouette={img_linked} link={'https://www.linkedin.com/in/aidan-van-gessel-19ba521b5'} size={40}/>;
export const GitHubIconLarge = <Icon silhouette={img_git} link={'https://github.com/bigdog765'} size={60}/>;
export const LinkedInIconLarge = <Icon silhouette={img_linked} link={'https://www.linkedin.com/in/aidan-van-gessel-19ba521b5'} size={60}/>;
export const PhoneIcon = <Icon silhouette={img_phone} link={""} size={60}/>;