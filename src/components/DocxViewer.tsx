'use client';

import { useEffect, useRef } from 'react';
import { renderAsync } from 'docx-preview';

interface Props {
    fileUrl?: string;
    fileData?: Blob | ArrayBuffer;
}

export default function DocxViewer({ fileUrl, fileData }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const renderDocx = async () => {
            try {
                let data = fileData;

                if (!data && fileUrl) {
                    const res = await fetch(fileUrl);
                    data = await res.arrayBuffer();
                }

                if (!data) return;

                ref.current!.innerHTML = '';

                await renderAsync(data, ref.current!);
            } catch (e) {
                console.error(e);
            }
        };

        renderDocx();
    }, [fileUrl, fileData]);

    return <div ref={ref} />;
}