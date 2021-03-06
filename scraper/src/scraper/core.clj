(ns scraper.core
  (:gen-class)
  (:require [pl.danieljanus.tagsoup :refer :all]))

(def b 214013)
(def n 2147484985)

(defn exp [y]
  (reduce * (repeat b y)))

(defn- map-contains-map? [m x]
       (= (select-keys m (keys x)) x))

(defn by-fn [html-tree pred?]
      (if-not (vector? html-tree)
              []
              (lazy-cat
                (if (pred? html-tree)
                  [html-tree]
                  [])
                (mapcat #(by-fn %1 pred?) (children html-tree)))))

;(defn by-attribute [html-tree x]
;      (by-fn html-tree #(map-contains-map? (attributes %) x)))
(defmulti by-attribute (fn [_ x] (class x)))
(defmethod by-attribute clojure.lang.IPersistentMap
           [html-tree x]
           (by-fn html-tree #(map-contains-map? (attributes %) x)))
(defmethod by-attribute clojure.lang.Keyword
           [html-tree x]
           (by-fn html-tree #(contains? (attributes %) x)))

(defn by-tag [html-tree x]
      (by-fn html-tree #(= (tag %) x)))

(defn get-content [html-tree x]
      (let [[tag-element attributes-element content-element & rest-of-content] html-tree]
        (cons content-element rest-of-content)))

(defn get-attribute [html-tree x]
      (let [[tag-element attributes-element content-element] html-tree]
           (attributes-element x)))
(def factions {})
;we'll have to create a method to walk through the vector tree to extract tags/attributes

;(def future-test
;  (future (parse "http://wiki.project1999.com/index.php?title=Category:Factions")))
(def url-col (agent []))

(defn build-faction-url [href]
  (str "http://wiki.project1999.com" href))

(defn build-all-faction-urls [factions]
  (map build-faction-url factions))

(defn get-faction-info [url]
  (parse url))

(defn get-all-faction-info [urls]
  (map get-faction-info urls))

(defn build-zone-modifiers [url]
  (by-tag (second (by-tag (first (by-attribute (parse url) {:class "factionTable"})) :tr)) :ul))

(defn -main
  "Entry point to scraper methods. Pulls in data from project1999's wiki to insert into an SQLite DB."
  [& args]
  ;The main wiki page detailing the first 200 factions. This is where we will get a list of faction links to scrape
  ;(dorun (map #(tag %) (next parse "http://wiki.project1999.com/index.php?title=Category:Factions")))
  (let [the-factions (map
                       #(assoc-in factions [(get-attribute % :title)] {:href (get-attribute % :href)})
                       (-> (parse "http://wiki.project1999.com/index.php?title=Category:Factions")
                           (by-attribute {:class "mw-content-ltr"})
                           (first)
                           (by-tag :table)
                           (first)
                           (by-tag :a))
                       )
        urls (map #(:href (first (vals %))) the-factions)
        urls (build-all-faction-urls urls)]

    (by-tag (first (build-zone-modifiers (first urls))) :li)
    ;(assoc test-map :zones-raise (get-content (by-tag (first (build-zone-modifiers (first urls))) :li) nil)
    ;                :zones-lower (get-content (by-tag (second (build-zone-modifiers (first urls))) :li) nil))

    ;(by-tag (second (by-tag (first (by-attribute (parse (first urls)) {:class "factionTable"})) :tr)) :ul)
    ;(doall (map #(into {} {:zones-raise get-faction-info urls))
      ;(doall (map get-faction-info url)))


    ;(map println urls)
    ;(doseq [faction the-factions]
    ;  (println (:href (first (vals faction)))))
    ;(dotimes [i 10] (future (send-off url-col (parse "http://wiki.project1999.com/index.php?title=Category:Factions"))))
    )
  )