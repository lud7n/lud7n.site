import React, { useEffect, useState } from 'react';
import './Parallax.css'; // CSS読み込みを忘れずに！

const codeText = `

#include <iostream>
#include <vector>
#include <queue>
#include <limits>
#include <functional>

using namespace std;

template<typename T>
class Graph {
public:
    struct Edge {
        int to;
        T cost;
        Edge(int to, T cost) : to(to), cost(cost) {}
    };

    Graph(int n) : adj(n) {}

    void add_edge(int u, int v, T cost) {
        adj[u].emplace_back(v, cost);
        adj[v].emplace_back(u, cost); // 無向グラフ
    }

    vector<T> dijkstra(int start) {
        int n = adj.size();
        vector<T> dist(n, numeric_limits<T>::max());
        dist[start] = 0;
        priority_queue<pair<T,int>, vector<pair<T,int>>, greater<pair<T,int>>> pq;
        pq.emplace(0, start);

        while(!pq.empty()) {
            T cost = pq.top().first;
            int u = pq.top().second;
            pq.pop();

            if(dist[u] < cost) continue;

            for(const auto& e : adj[u]) {
                T next_cost = cost + e.cost;
                if(dist[e.to] > next_cost) {
                    dist[e.to] = next_cost;
                    pq.emplace(next_cost, e.to);
                }
            }
        }
        return dist;
    }

private:
    vector<vector<Edge>> adj;
};

int main() {
    int n, m;
    cin >> n >> m;
    Graph<long long> g(n);

    for(int i = 0; i < m; i++) {
        int u, v;
        long long w;
        cin >> u >> v >> w;
        u--; v--;
        g.add_edge(u, v, w);
    }

    auto distances = g.dijkstra(0);

    for(int i = 0; i < n; i++) {
        if(i > 0) cout << " ";
        cout << distances[i];
    }
    cout << endl;
    return 0;
}


`.trim();

const TypingBackground = () => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index >= codeText.length) {
            return;  // 完了したら何もしない
        }

        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + codeText[index]);
            setIndex(prev => prev + 1);
        }, 10);

        return () => clearInterval(interval);
    }, [index]);

    return <pre className="typing-background">{displayedText}</pre>;
};


export default TypingBackground;
