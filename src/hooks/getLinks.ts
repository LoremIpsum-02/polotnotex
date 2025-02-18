// http://polotnotex.beget.tech/wp-json/custom-api/v1/social-links

export default async function getSocialLinks() {
    const response = await fetch("http://polotnotex.beget.tech/wp-json/custom-api/v1/social-links")
    const result = await response.json()
    return result
}