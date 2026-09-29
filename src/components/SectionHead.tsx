import React from 'react';

interface SectionHeadProps {
  children: React.ReactNode;
  /** 补一句说明，交代这块内容是什么 */
  note?: string;
}

/** 章节标题：2px 黑线压顶 + 标题。线是结构，不是装饰。 */
const SectionHead: React.FC<SectionHeadProps> = ({ children, note }) => (
  <header className="section__head">
    <h2>{children}</h2>
    {note && <p className="section__note">{note}</p>}
  </header>
);

export default SectionHead;
