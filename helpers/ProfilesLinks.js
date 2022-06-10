import {ProfilesUrls} from "../config";

export const goToLinkHandler = (name) => {
    const url = name === 'facebook' ? ProfilesUrls.FACEBOOK :
        name === 'github' ? ProfilesUrls.GITHUB : ProfilesUrls.LINKEDIN;
    window.open(url, '_blank');
}
