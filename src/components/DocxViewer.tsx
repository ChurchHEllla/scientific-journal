'use client';

import { useEffect, useRef } from 'react';
import { renderAsync } from 'docx-preview';

interface Props {
    fileUrl: string;
    withWrapper?: boolean;
}

export default function DocxViewer({ fileUrl, withWrapper}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const renderDocx = async () => {
            try {

                const res = await fetch(fileUrl);

                const data = await res.arrayBuffer();

                if (!data) return;

                ref.current!.innerHTML = '';

                await renderAsync(data, ref.current!, undefined, {inWrapper: (withWrapper ?? true)});
            } catch (e) {
                console.error(e);
            }
        };

        renderDocx();
    }, [fileUrl, withWrapper]);

    return <div ref={ref} />;
}