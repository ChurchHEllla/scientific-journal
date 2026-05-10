'use client';

import {SpecialZoomLevel, Viewer, ViewMode, Worker} from '@react-pdf-viewer/core';
import {defaultLayoutPlugin} from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface Props {
    fileUrl: string
}

export default function PdfViewer({fileUrl}: Props) {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={{ height: '100vh', overflow: 'auto' }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer
                    viewMode={ViewMode.SinglePage}
                    defaultScale={SpecialZoomLevel.PageWidth}
                    fileUrl={fileUrl}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </Worker>
        </div>

    );
}