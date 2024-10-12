import { decrement, increment } from "../../../pkg/wasm";
import { useRustCtx } from "../hooks/hooks";
import { AppConfig } from "../types";

export default function ParaCounter() {
    const [config] = useRustCtx<AppConfig | null>('app_started', null)
    const [count] = useRustCtx('counter_updated', config?.count)

    return (
        <div class="flex flex-col space-y-4">
            <h2>Parallel Counter {count}</h2>
            <div className="flex gap-2">
                <button onClick={decrement}>Decrement</button>
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    )
}
