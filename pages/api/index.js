export const PREFIX = 'https://api.wuh.site'
export const BASE = ''

export const FETCH_ARTICLE_LIST = `${PREFIX}${BASE}/articles`

export default function hanlder (req, res) {
    console.log(req, res)
    res.status(200).json()
}