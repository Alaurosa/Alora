import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In a real app, this would save the data to a database
    // and potentially update the user's cycle information
    
    // For demonstration, we'll just return the data with a success message
    return NextResponse.json({
      success: true,
      message: 'Daily input saved successfully',
      data
    });
  } catch (error) {
    console.error('Error processing daily input:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to save daily input' },
      { status: 500 }
    );
  }
}