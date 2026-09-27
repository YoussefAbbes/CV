# CV source

`cv.html` is the source of the downloadable CV (`public/Cv_Youssef_Abbes.pdf`).

To regenerate the PDF after editing `cv.html`:

```bash
cd cv-source
node render.cjs          # needs Playwright (npm i -g playwright)
cp Cv_Youssef_Abbes.pdf ../public/Cv_Youssef_Abbes.pdf
```

`render.cjs` also prints how much free space is left at the bottom of each page; a negative number means that page overflows.
