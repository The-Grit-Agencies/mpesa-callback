export default function handler(req, res) {
    if (req.method === 'POST') {
        console.log("Mpesa Callback Received:", req.body);

        res.status(200).json({ message: "Mpesa callback received successfully!" });
    } else {
        res.status(405).json({ error: "Method Not Allowed" });
    }
}
