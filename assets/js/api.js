async function fetchProfileData() {
    const url = `https://raw.githubusercontent.com/natatgh/js-developer-portfolio-main/main/data/profile.json?token=GHSAT0AAAAAACNHUA2SYW2WQPRCFUF76QPIZOEFLNA&_=${Date.now()}`;
    const response = await fetch(url);
    const profileData = await response.json();
    return profileData;
}
