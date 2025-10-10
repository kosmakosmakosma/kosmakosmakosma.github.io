import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from './icons.tsx';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="bg-slate-950/70 rounded-lg relative border border-slate-700">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 rounded-md bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white transition-colors"
        aria-label="Copy code"
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
      <pre className="p-4 overflow-x-auto">
        <code className="font-mono text-slate-300 text-sm">
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;