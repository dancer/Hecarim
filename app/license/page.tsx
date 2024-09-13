import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function LicensePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <Link href="/">
          <Button
            variant="ghost"
            size="sm"
            className="hover:bg-transparent hover:text-primary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-card text-card-foreground rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-extrabold text-primary mb-6 text-center">
            The Hecarim Enchanted Forest License (HEFL)
          </h1>
          <p className="text-muted-foreground mb-6 text-center">Version 1.0, {new Date().getFullYear()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Preamble</h2>
            <p className="text-muted-foreground">
              As you venture into the enchanted forest of code that is Hecarim, you are granted the following magical rights and responsibilities. May your journey be filled with wonder, creativity, and beautifully themed code.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Definitions</h2>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>"The Theme" refers to the Hecarim VS Code Theme and all its variants.</li>
              <li>"Forest Keeper" refers to the original creator(s) of The Theme.</li>
              <li>"Wanderers" refers to users, contributors, and anyone who interacts with The Theme.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Granted Enchantments</h2>
            <ol className="list-decimal list-inside text-muted-foreground">
              <li><strong>Freedom to Explore</strong>: All Wanderers are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of The Theme.</li>
              <li><strong>Magical Forking</strong>: You may create your own branch of The Theme's enchanted forest, nurturing it as you see fit.</li>
              <li><strong>Spell of Attribution</strong>: When showcasing or distributing The Theme or works derived from it, you must give appropriate credit to the Forest Keeper, provide a link to this license, and indicate if changes were made.</li>
              <li><strong>Transformation Charm</strong>: You may transform The Theme for your own uses, but any distributed modifications must be clearly marked as such.</li>
            </ol>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Wanderer's Oath</h2>
            <p className="text-muted-foreground mb-4">By using The Theme, you swear upon the ancient code of the forest to:</p>
            <ol className="list-decimal list-inside text-muted-foreground">
              <li>Use your powers for good, creating beautiful and functional code environments.</li>
              <li>Respect the original magic of The Theme, acknowledging its origins.</li>
              <li>Share your own enchantments with the community when possible, helping the forest grow.</li>
            </ol>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">Disclaimer of Magical Warranty</h2>
            <p className="text-muted-foreground">
              THE THEME IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE FOREST KEEPERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE THEME OR THE USE OR OTHER DEALINGS IN THE THEME.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-4">The Forest's Reach</h2>
            <p className="text-muted-foreground">
              This license applies to all parts of The Theme that are not externally maintained libraries.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">In Closing</h2>
            <p className="text-muted-foreground">
              May your code be ever colorful, your syntax ever highlighted, and your development environment as enchanting as the deepest forest. Go forth and create wonders!
            </p>
          </section>
        </div>
      </main>
      <footer className="p-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Hecarim. All rights reserved.
      </footer>
    </div>
  )
}