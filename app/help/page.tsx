export default function HelpPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Help & Support</h1>
      <h2 className="text-xl font-semibold">FAQs</h2>
      <ul className="list-disc list-inside">
        <li>How do I add a new dog? - Go to Dashboard & click “Add Dog”.</li>
        <li>How do I track progress? - Visit the Progress page.</li>
        <li>Need more help? - Contact our support team below.</li>
      </ul>
      <h2 className="text-xl font-semibold">Contact Support</h2>
      <p>
        Email us at{' '}
        <a href="mailto:support@woofwise.com" className="text-blue-600 hover:underline">
          support@woofwise.com
        </a>
      </p>
      <h2 className="text-xl font-semibold">Resources</h2>
      <ul className="list-disc list-inside">
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Community Forum
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline">
            Recommended Training Products
          </a>
        </li>
      </ul>
    </div>
  );
}