import { useEffect, useState } from 'preact/hooks';
import init from "../../pkg/wasm.js";
import Counter from './components/counter.js';
import ParaCounter from './components/parallel-counter.js';
import useConfetti from './hooks/confetti.js';

export function App() {
    const [wasmOnline, setWasmOnline] = useState(true)

    useEffect(() => {
        async function run() {
            try {
                console.log('Initializing Rust WASM module...')
                await init();
                console.log('Rust WASM module initialized!')
            } catch (error) {
                console.error('Error initializing Rust WASM module:', error)
                setWasmOnline(false)
            }
        }

        run()
    }, [])

    useConfetti()

    if (!wasmOnline) {
        return (
            <main>
                <h1>Wasm Not Available</h1>
                <p>There was an error initializing the Rust WebAssembly module.</p>
            </main>
        )
    }

    return (
        <main className="flex flex-col space-y-10 m-10">
            <div className="flex flex-col space-y-4">
                <h1 className="text-4xl font-bold underline">Rust Preact</h1>
                <p>This is a simple Preact app that initializes a Rust WebAssembly module.</p>
            </div>

            <Counter />
            <Counter />
            <ParaCounter />
        </main>
    )
}
