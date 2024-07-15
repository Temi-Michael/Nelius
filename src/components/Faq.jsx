import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="faq-item">
            <div className="faq-question" onClick={onClick}>
                <span className="faq-icon" onClick={onClick}>{isOpen ? '-' : '+'}</span>
                <span className='question'>{question}</span>
            </div>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
};

const Dropdown = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'What is Nelius?',
            answer: 'Nelius is a decentralized platform built on the Ethereum network, designed to facilitate funding and promotion for events within the Christian community.',
        },
        {
            question: 'What type of events does Nelius support?',
            answer: 'You can track your order using the tracking number...',
        },
        {
            question: 'Is Nelius available for events outside the Christian community?',
            answer: 'Yes, we offer international shipping...',
        },
        {
            question: 'What benefits does Nelius offer to event owners?',
            answer: 'Yes, we offer international shipping...',
        },
    ];

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

export default function Faq() {
    return (
        <div className="faq">
            <div className="faq-head">
                <p className="faqHeadText">
                    Frequently Asked <span className="textOne">Questions</span>
                </p>
            </div>
            <div className="faq-info">
                <p className='small-faq'>FAQ</p>
                <Dropdown />
            </div>
        </div>
    );
}
