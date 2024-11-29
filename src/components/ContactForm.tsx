'use client'

import React from 'react'
import * as Form from '@radix-ui/react-form'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    emailjs.init({
      publicKey: "AwrhVwge4tHWpXf2H",
      blockHeadless: true,
    })
    emailjs.send("service_8f6ai5e","template_iuutzrd",{
      from_name: formData.get('name'),
      message: formData.get('message'),
      from_email: formData.get('email'),
    });
  }

  return (
    <div id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl text-center mb-8">
          Contact Me
        </h2>
        <Form.Root onSubmit={handleSubmit} className="space-y-2">
          <Form.Field name="name">
            <Form.Label className="block text-sm font-medium text-foreground">Name</Form.Label>
            <Form.Control asChild>
              <input 
                className="mt-1 block w-full rounded-md border border-input px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-primary bg-background dark:text-foreground"
                type="text" 
                required 
              />
            </Form.Control>
            <div className="min-h-6">
              <Form.Message className="text-sm text-destructive mt-1" match="valueMissing">
                Please enter your name
              </Form.Message>
            </div>
          </Form.Field>
          <Form.Field name="email">
            <Form.Label className="block text-sm font-medium text-foreground">Email</Form.Label>
            <Form.Control asChild>
              <input 
                className="mt-1 block w-full rounded-md border border-input px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-primary bg-background dark:text-foreground"
                type="email" 
                required 
              />
            </Form.Control>
            <div className="min-h-6">
              <Form.Message className="text-sm text-destructive mt-1" match="valueMissing">
                Please enter your email
              </Form.Message>
              <Form.Message className="text-sm text-destructive mt-1" match="typeMismatch">
                Please provide a valid email
              </Form.Message>
            </div>
          </Form.Field>
          <Form.Field name="message">
            <Form.Label className="block text-sm font-medium text-foreground">Message</Form.Label>
            <Form.Control asChild>
              <textarea 
                className="mt-1 block w-full rounded-md border border-input px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-primary bg-background dark:text-foreground"
                required 
                rows={4}
              />
            </Form.Control>
            <div className="min-h-6">
              <Form.Message className="text-sm text-destructive mt-1" match="valueMissing">
                Please enter a message
              </Form.Message>
            </div>
          </Form.Field>
          <Form.Submit asChild>
            <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-accent-foreground bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
              Send Message
              <EnvelopeClosedIcon className="ml-2 h-5 w-5" />
            </button>
          </Form.Submit>
        </Form.Root>
      </div>
    </div>
  )
}

