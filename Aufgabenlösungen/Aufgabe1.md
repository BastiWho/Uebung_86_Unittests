# Aufgabe 1: Theorie

1. **Was sind Unit Tests in der Softwareentwicklung und wie funktionieren sie?**
   - Erläutere den Zweck von Unit Tests und welche Teile des Codes sie überprüfen.

        *    Unit Tests sind kleine Test in der Softwareentwicklung, die den Code isoliert auf seine zu erwartende Funktion prüfen. 
        *    Sie helfen bei der frühzeitigen Fehlererkennung durch die Überprüfung von Funktionalität der Funktionen / Klassen.

2. **Welche Vorteile bieten Unit Tests für Entwickler und Softwareprojekte?**
   - Nenne mehrere Vorteile von Unit Tests und wie sie zur Verbesserung der Codequalität und Wartbarkeit beitragen.

        *   Bessere Codequalität und Wartbarkeit
        *   Durch das direkte Debugging des Codes beschleunigt es den Entwicklungsprozess
        *   frühzeitige Fehlererkennung 
        *   Fehlerisolation durch Unittests, da der Fehler auf eine bestimmte Funktion bzw. Abschnitt im Code hindeutet

3. **Was sind die Hauptkomponenten des Testing-Frameworks Mocha?**
   - Beschreibe die grundlegenden Eigenschaften von Mocha und wie es Entwicklern hilft, Tests zu organisieren und auszuführen.

        *   "Describe": Eine Gruppierung von Tests
        *   "it": Einzelner Testfall (Bei uns die Funktionen "toCelcius" und "toFahrenheit")   
        *   "before", "after", "beforeEach" und "afterEach": "Hooks" zum Ausführen von Setup- und CleanUp Aufgaben.
        *   Mocha hilft dabei Test zu organisierne und asynchrone Tests auszuführen. Chai wird dabei mit Mocha mitverwendet, um die erwarteten Ergebnisse in den Testfällen zu definieren. 

4. **Wie kann Chai als Assertions-Bibliothek in Kombination mit Mocha verwendet werden?**
   - Erkläre, wie Chai-Assertions in Testfällen von Mocha eingesetzt werden, um die Funktionalität des Codes zu überprüfen.

        *   Chai-Assertions werden in Mocha-Testfällen eingesetzt, um zu überprüfen, ob die Ausgabe einer Funktion den erwarteten Ergebnissen entspricht.

5. **Welche Schritte sind erforderlich, um Mocha und Chai in einem Node.js-Projekt zu verwenden?**
   - Beschreibe die notwendigen Schritte, um Mocha und Chai als Entwicklerabhängigkeiten zu installieren und Testdateien zu erstellen.

        *   Mocha und Chai mit "npm install Mocha Chai --start-dev" installieren. (Damit landen beide in der DevDependencies)
        *   Testordner anlegen und darin eine Testdatei erstellen.
        *   Die entsprechenden Testfälle in der Datei definieren 
        *   In den "Projektordner" zurück gehen und die Testdatei mit "npx mocha" ausführen.

6. **Welche zusätzlichen Möglichkeiten gibt es, um Unit Tests zu erweitern und zu verbessern?**
   - Benenne einige weitere Techniken oder Werkzeuge, die neben Mocha und Chai zur Verbesserung von Unit Tests verwendet werden können.

        *   Unit Tests können durch Mocking, Code-Coverage-Tools, Daten-Driven Tests und Test-Runner erweitert und verbessert werden.

7. **Warum sollten Entwickler regelmäßig Unit Tests durchführen und wie tragen sie zur kontinuierlichen Integration und Bereitstellung bei?**
    - Erkläre den Zusammenhang zwischen Unit Tests, kontinuierlicher Integration und kontinuierlicher Bereitstellung (CI/CD) in der Softwareentwicklung.

        *   Regelmäßige Unit Tests sind wichtig, um frühzeitig Fehler zu finden. In der CI/CD-Umgebung werden Unit Tests automatisch ausgeführt, um sicherzustellen, dass der Code zuverlässig funktioniert, bevor er in die Produktion gelangt. Dadurch wird der Entwicklungsprozess beschleunigt und die Codequalität verbessert.
