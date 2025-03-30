import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // For now, returning a mock response regardless of the request
    const response = "I'm a mock AI assistant. In the future, I'll be connected to a real AI service to answer your questions about black holes and neutron stars!";

    return NextResponse.json({ response });
  } catch {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}