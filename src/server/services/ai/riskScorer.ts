import { openai } from '@/lib/openai';

export async function calculateRiskScore(appointmentData: any) {
  const prompt = `Calculate no-show risk (1-100) for this appointment: ${JSON.stringify(appointmentData)}`;
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });
  return parseInt(response.choices[0].message.content || "50");
}