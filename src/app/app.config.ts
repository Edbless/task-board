import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

// Import the functions you need from the SDKs you need
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';


const firebaseConfig = {
  apiKey: "AIzaSyDkIvPaprWxavizJS8keIMgS7V_YVyGZHU",
  authDomain: "task-board-9a27b.firebaseapp.com",
  projectId: "task-board-9a27b",
  storageBucket: "task-board-9a27b.firebasestorage.app",
  messagingSenderId: "1010598491138",
  appId: "1:1010598491138:web:fe635925fbe41b501d231b",
  measurementId: "G-2RERWWFEL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService
  ]
};
