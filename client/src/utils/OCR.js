/**
 * Perform optical character recognition on a image's content.
 * @param {File} file The image to process
 * @return {Promise<{
 * total: string,
 * spending_category: string,
 * payment_method: string
 * }>} The data from the canvas
 */
export const doOCR = async file => {
	const response = await fetch(
		'/api',
		{ method: 'POST', body: file }
	);
	return await response.json();
};
