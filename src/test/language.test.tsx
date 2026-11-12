import { act, renderHook, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { LanguageProvider, languageStorageKey, useLanguage } from "@/lib/i18n";

vi.mock("@tanstack/react-router", () => ({ useRouterState: () => "/contact" }));

afterEach(() => { localStorage.clear(); });

describe("Language selection", () => {
  it("defaults to French when no language has been selected", () => {
    const { result } = renderHook(() => useLanguage(), { wrapper: LanguageProvider });
    expect(result.current.language).toBe("fr");
  });

  it("persists English and restores it for returning visitors", async () => {
    const first = renderHook(() => useLanguage(), { wrapper: LanguageProvider });
    act(() => first.result.current.setLanguage("en"));
    expect(localStorage.getItem(languageStorageKey)).toBe("en");
    expect(document.documentElement.lang).toBe("en");
    first.unmount();
    const second = renderHook(() => useLanguage(), { wrapper: LanguageProvider });
    await waitFor(() => expect(second.result.current.language).toBe("en"));
  });

  it("allows switching back to French", () => {
    localStorage.setItem(languageStorageKey, "en");
    const { result } = renderHook(() => useLanguage(), { wrapper: LanguageProvider });
    act(() => result.current.setLanguage("fr"));
    expect(result.current.language).toBe("fr");
    expect(localStorage.getItem(languageStorageKey)).toBe("fr");
    expect(document.documentElement.lang).toBe("fr");
  });
});