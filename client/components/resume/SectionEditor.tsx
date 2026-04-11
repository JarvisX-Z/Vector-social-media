"use client";

import { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

interface SectionEditorProps {
  title: string;
  children: ReactNode;
  value: string;
}

export const SectionEditor = ({ title, children, value }: SectionEditorProps) => {
  return (
    <Accordion.Item
      value={value}
      className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
    >
      <Accordion.Header>
        <Accordion.Trigger className="group w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
          <h3 className="font-semibold text-gray-900">{title}</h3>

          <ChevronDown className="w-5 h-5 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </Accordion.Trigger>
      </Accordion.Header>

      <Accordion.Content
        className="
        overflow-hidden
        transition-all
        duration-300
        data-[state=closed]:h-0
        data-[state=open]:h-[var(--radix-accordion-content-height)]
      "
      >
        <div className="px-6 py-4 border-t border-gray-200">
          {children}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  );
};