import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ModelProvider } from '../context/ModelContext';
import { AnimatePresence } from 'framer-motion';

const Navbar = lazy(() => import('../layout/Navbar'));
const Footer = lazy(() => import('../layout/Footer'));

const Home = lazy(() => import('../pages/Home'));
const Models = lazy(() => import('../pages/Models'));
const Electric = lazy(() => import('../pages/Electric'));
const Configurator = lazy(() => import('../pages/Configurator'));
const Visit = lazy(() => import('../pages/Visit'));
const NotFound = lazy(() => import('../pages/NotFound'));

const ModelsFilterResult = lazy(() => import('../context/models/filter-result/ModelsFilterResult'));
const ConfiguratorFilterResult = lazy(() => import('../context/configurator-models/filter-result/ConfiguratorFilterModelsResult'));

const PageTransition = lazy(() => import('../animations/PageTransition'));

import ScrollToTop from '../ScrollToTop';

function AppRoutes() {
    return (
        <ModelProvider>
            <Suspense fallback={<div>Loading...</div>}>
                <ScrollToTop />
                <Navbar />

                <AnimatePresence mode='wait'>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PageTransition>
                                    <Home />
                                </PageTransition>
                            }
                        />
                        <Route
                            path="/Models"
                            element={
                                <PageTransition>
                                    <Models />
                                </PageTransition>
                            }
                        />
                        <Route
                            path="/models/filter"
                            element={
                                <PageTransition>
                                    <ModelsFilterResult />
                                </PageTransition>
                            }
                        />
                        <Route
                            path="/Electric"
                            element={
                                <PageTransition>
                                    <Electric />
                                </PageTransition>
                            }
                        />
                        <Route
                            path="/Configurator"
                            element={
                                <PageTransition>
                                    <Configurator />
                                </PageTransition>
                            }
                        />
                        <Route
                            path="/configurator/filter"
                            element={
                                <PageTransition>
                                    <ConfiguratorFilterResult />
                                </PageTransition>
                            }
                        />
                        <Route
                            path="/Visit"
                            element={
                                <PageTransition>
                                    <Visit />
                                </PageTransition>
                            }
                        />
                        <Route
                            path="*"
                            element={
                                <PageTransition>
                                    <NotFound />
                                </PageTransition>
                            }
                        />
                    </Routes>
                </AnimatePresence>

                <Footer />
            </Suspense>
        </ModelProvider>
    );
}

export default AppRoutes;
