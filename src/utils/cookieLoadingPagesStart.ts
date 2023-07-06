export function cookieLoadingPagesStart(
    setIsLoadingPagesStart: React.Dispatch<React.SetStateAction<boolean>>
) {
    const isLoadingPagesStart = document.cookie.split("; ");
    const isLoadingPagesStartCookie = isLoadingPagesStart.find(
        (isLoadingPagesStart) =>
            isLoadingPagesStart.startsWith("isLoadingPagesStart=")
    );
    if (isLoadingPagesStartCookie) {
        setIsLoadingPagesStart(false);
        return true;
    } else {
        return false;
    }
}
