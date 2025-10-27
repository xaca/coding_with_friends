import { useState } from "react";
import MainLayout from "../../ui/MainLayout/MainLayout";
import "./Cine.scss";

function Cine() {
    const form_url = "https://forms.gle/KQUyQvfyu4qzZvQq9";
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(false);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    const handleIframeError = () => {
        setIsLoading(false);
        setLoadError(true);
    };

    return (
        <MainLayout>
            <div id="cine" className="cine-container">
                <h1 className="typewriter tw-short">Salida Cine🍿</h1>
                <div className="form-container">
                    {isLoading && <FormSkeletonLoader />}
                    <iframe
                        src={form_url}
                        width="80%"
                        height="4250"
                        className={`cine-form-iframe ${isLoading ? 'loading' : 'loaded'}`}
                        onLoad={handleIframeLoad}
                        onError={handleIframeError}
                        title="Formulario de Salida al Cine"
                    >
                        Cargando…
                    </iframe>
                    {loadError && (
                        <div className="error-message">
                            <p>Error al cargar el formulario</p>
                            <p>Por favor, recarga la página o intenta más tarde.</p>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}

// Componente Skeleton Loader para el formulario 
function FormSkeletonLoader() {
    return (
        <div className="skeleton-loader">
            <div className="skeleton-inner">
                <div className="skeleton-header">
                    <div className="skeleton-line skeleton-title"></div>
                    <div className="skeleton-line skeleton-subtitle"></div>
                </div>
                <div className="skeleton-form">
                    {/* 3 tarjetas grandes como skeleton-subtitle */}
                    {[...Array(3)].map((_, index) => (
                        <div key={`large-${index}`} className="skeleton-large-card"></div>
                    ))}
                    {/* 5 tarjetas pequeñas como skeleton-label */}
                    {[...Array(5)].map((_, index) => (
                        <div key={`small-${index}`} className="skeleton-small-card"></div>
                    ))}
                    <div className="skeleton-buttons">
                        <div className="skeleton-button skeleton-button-primary"></div>
                        <div className="skeleton-button skeleton-button-secondary"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cine;
