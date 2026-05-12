'use client';

import { useEffect, useRef } from 'react';
import { renderAsync } from 'docx-preview';

export default function DocxViewer({ fileUrl }: { fileUrl: string }) {
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!rootRef.current) return;

        // 🔥 создаём ИЗОЛИРОВАННЫЙ контейнер
        const container = document.createElement('div');
        container.className = 'docx-container';

        rootRef.current.replaceChildren(container);

        let cancelled = false;

        const run = async () => {
            try {
                const res = await fetch(fileUrl);
                const data = await res.arrayBuffer();

                if (cancelled) return;

                await renderAsync(data, container, undefined, {
                    inWrapper: true,
                });
            } catch (e) {
                console.error(e);
            }
        };

        run();

        return () => {
            cancelled = true;

            // 🔥 ключевой момент — удаляем ВСЮ поддеревню
            container.remove();

            // 🔥 страховка от “залипших” overlay-эффектов
            document.body.style.pointerEvents = '';
            document.body.style.overflow = '';
        };
    }, [fileUrl]);

    return <div ref={rootRef} />;
}