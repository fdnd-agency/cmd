import createClient from "$lib/vendors/prismicClient";

export async function get({ fetch, params }) {
    const client = createClient(fetch)
    const { uid } = params
    const standard = await client.getByUID('standard', uid)

    if (standard) {
        return {
            body: { standard }
        }
    }
    return {
        status: 404
    }
}