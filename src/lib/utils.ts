export function arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

export async function fetchImageFromText(renderedRichText: string): Promise<string | null> {
    let image: string | null = null;
    const form = new FormData();
    form.append('prompt', renderedRichText); // Changed the key to 'prompt'

    try {
        const response = await fetch('https://clipdrop-api.co/text-to-image/v1', {
            method: 'POST',
            headers: {
                'x-api-key': import.meta.env.CLIPDROP_API_KEY, // Replace this with a secure way to access the API key
            },
            body: form,
        });
        const buffer = await response.arrayBuffer();

        // Convert buffer to base64 data URL
        const base64Flag = 'data:image/jpeg;base64,';
        const imageStr = arrayBufferToBase64(buffer);
        image = base64Flag + imageStr;
    } catch (error) {
        console.error("Error fetching the image:", error);
    }

    return image;
}

