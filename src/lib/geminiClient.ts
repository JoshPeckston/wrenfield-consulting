import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

export type ImageModel = 'gemini-2.5-flash-preview-image-generation' | 'gemini-2.0-flash-exp';

export const IMAGE_MODELS: { id: ImageModel; name: string; description: string }[] = [
  {
    id: 'gemini-2.5-flash-preview-image-generation',
    name: 'Nano Banana (Gemini 2.5 Flash)',
    description: 'Fast, efficient image generation',
  },
  {
    id: 'gemini-2.0-flash-exp',
    name: 'Gemini 2.0 Flash',
    description: 'Experimental image generation',
  },
];

export const DEFAULT_MODEL: ImageModel = 'gemini-2.5-flash-preview-image-generation';

function getClient() {
  if (!GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is not set. Get one at https://aistudio.google.com/apikey');
  }
  return new GoogleGenAI({ apiKey: GEMINI_API_KEY });
}

export interface GenerateImageResult {
  imageData: string; // base64
  mimeType: string;
  text?: string;
}

export async function generateImage(
  prompt: string,
  model: ImageModel = DEFAULT_MODEL
): Promise<GenerateImageResult> {
  const ai = getClient();

  const response = await ai.models.generateContent({
    model,
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    config: {
      responseModalities: ['TEXT', 'IMAGE'],
    },
  });

  const parts = response.candidates?.[0]?.content?.parts;
  if (!parts) throw new Error('No response from model');

  let imageData = '';
  let mimeType = 'image/png';
  let text = '';

  for (const part of parts) {
    if (part.text) {
      text += part.text;
    }
    if (part.inlineData) {
      imageData = part.inlineData.data || '';
      mimeType = part.inlineData.mimeType || 'image/png';
    }
  }

  if (!imageData) {
    throw new Error('No image was generated. Try a different prompt.');
  }

  return { imageData, mimeType, text };
}

export async function iterateImage(
  prompt: string,
  existingImageBase64: string,
  existingImageMimeType: string,
  model: ImageModel = DEFAULT_MODEL
): Promise<GenerateImageResult> {
  const ai = getClient();

  const response = await ai.models.generateContent({
    model,
    contents: [
      {
        role: 'user',
        parts: [
          {
            inlineData: {
              data: existingImageBase64,
              mimeType: existingImageMimeType,
            },
          },
          { text: prompt },
        ],
      },
    ],
    config: {
      responseModalities: ['TEXT', 'IMAGE'],
    },
  });

  const parts = response.candidates?.[0]?.content?.parts;
  if (!parts) throw new Error('No response from model');

  let imageData = '';
  let mimeType = 'image/png';
  let text = '';

  for (const part of parts) {
    if (part.text) {
      text += part.text;
    }
    if (part.inlineData) {
      imageData = part.inlineData.data || '';
      mimeType = part.inlineData.mimeType || 'image/png';
    }
  }

  if (!imageData) {
    throw new Error('No image was generated during iteration. Try a different prompt.');
  }

  return { imageData, mimeType, text };
}
