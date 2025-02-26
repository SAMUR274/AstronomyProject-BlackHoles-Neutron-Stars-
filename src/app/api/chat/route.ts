import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    // Replace this with your actual AI integration
    // For now, returning a mock response
    const response = "I'm a mock AI assistant. In the future, I'll be connected to a real AI service to answer your questions about black holes and neutron stars!";

    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}