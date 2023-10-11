import { genPageMetadata } from 'app/seo';

export const metadata = genPageMetadata({ title: 'Kirby' });

export default function GamePage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Kirby Egg Catcher
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A to START, R to RESTART, W to EAT, good luck :^)
            </p>
            </div>
            <div className="container py-12">
          <iframe src="/static/games/kirby/KirbyEggCatcher.html"width="100%" height="500px" frameBorder="0"></iframe>

            
        </div>
      </div>
    </>
  );
}
